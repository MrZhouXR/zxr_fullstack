<template>
  <div>
    <h2>news-content</h2>
    <p>newsId: {{$route.params.newsId}}</p>
    <ul>
      <li><a href="/">home</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>