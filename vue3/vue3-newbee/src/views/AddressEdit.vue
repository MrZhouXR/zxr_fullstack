<template>
  <div class="address-edit-box">
    <s-header :name="type == 'add' ? '新增地址' : '编辑地址'"></s-header>
    <van-address-edit
      :area-list="areaList"
      :show-delete="type == 'edit'"
      :addressInfo="addressInfo"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { onMounted, reactive, toRefs } from 'vue'
import { tdist } from '@/common/js/util'
import { addAddress, EditAddress ,getAddressDetail, DeleteAddress} from '@/service/address.js'
import { Toast } from 'vant'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    sHeader
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
      type: 'add',
      from: route.query.from,
      addressInfo: {},
      addressId: ''
    })

    

    onMounted(async () => {
      // 省市区列表构建
      let _province_list = {}
      let _city_list = {}
      let _county_list = {}
      tdist.getLev1().forEach(p => {
        _province_list[p.id] = p.text

        tdist.getLev2(p.id).forEach(c => {
          _city_list[c.id] = c.text

          tdist.getLev3(c.id).forEach(q => _county_list[q.id] = q.text)
        })

      });
      state.areaList.province_list = _province_list
      state.areaList.city_list = _city_list
      state.areaList.county_list = _county_list

      const { addressId, from, type } = route.query
      state.type = type
      state.addressId = addressId
      state.from = from || ''
      if(type == 'edit') {
        const { data: addressDetail } = await getAddressDetail(addressId)
        let _areaCode = ''
        // const province = tdist.getLev1()
        // Object.entries(state.areaList.county_list).forEach(([id,text]) => {
        //   // 先找到对应的区
        //   if(text == addressDetail.regionName) {
        //     console.log(text);
        //     // 找到区对应的省份
        //     const provinceIndex = province.findIndex(item => item.id.substr(0,2))
        //   }
        // })

        const toCode = (area,code) => {
          for(let key in tdist) {
            if(tdist[key][0] == area && tdist[key][1] == code) {
              return key
            }
          }
        }
        // 拿到省级code，利用市级code找到区对应的code
        let provinceCode = toCode(addressDetail.provinceName,'1')
        let cityCode = toCode(addressDetail.cityName,provinceCode)
        let regionCode = toCode(addressDetail.regionName,cityCode)
        _areaCode = regionCode

        state.addressInfo = {
          id: addressDetail.addressId,
          name: addressDetail.userName,
          tel: addressDetail.userPhone,
          province: addressDetail.provinceName,
          city: addressDetail.regionName,
          addressDetail: addressDetail.detailAddress,
          areaCode: _areaCode,
          isDefault: !!addressDetail.defaultFlag
        }

      }

    })

    const onSave = async (content) => {
      console.log(content);
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0
      }
      if(state.type == 'edit') {
        params['addressId'] = state.addressId
      }
      // 新增或修改
      await state.type == 'add' ? addAddress(params) : EditAddress(params)
      Toast('保存成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }

    const onDelete = async () => {
      await DeleteAddress(state.addressId)
      Toast('删除成功')
      setTimeout(() => {
        router.back()
      },1000)
    }

    return {
      ...toRefs(state),
      onSave,
      onDelete
    }
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .edit {
    .van-field__body {
      textarea {
        height: 26px!important;
      }
    }
  }
  .address-edit-box {
    margin-top: 44px;
    .van-address-edit {
      .van-button--danger {
        background: @primary;
        border-color: @primary;
      }
      .van-switch--on {
        background: @primary;
      }
    }
  }
</style>