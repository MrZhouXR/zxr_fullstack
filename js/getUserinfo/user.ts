const getUserTemplate = (user:{name:string,company:string}):string => 
    `
    <a class="weui-cell  weui-cell_access" href="javascript:">
        <div class="weui-cell__bd">
                <p>${user.name}</p>
            </div>
            <div class="weui-cell__ft">${user.company}</div>
        </a>
    
    `