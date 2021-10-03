var todo = new Vue({
    el: "#todoList",
    data: {
        titleInput:"",
        todos: [],
        show:false,
        disabled:false,
        noList:true
    },
    methods:{
        createBtn() {
            //表示の切り替え
            if(this.titleInput == "") this.noList, this.show, this.disabled=true;
            else this.show = true, this.noList = false

            //todo 詳細
            this.todos.push(this.titleInput+"  "+date(new Date(), 'YYYY/MM/DD hh:mm:ss'))
            this.titleInput = "";
        },
        deleteBtn(data) {
            //削除確認
            let deleteCon = confirm("本当に削除してもよろしいですか？")
            if (deleteCon) this.todos = this.todos.filter(todo => todo != data);

            //リスト全削除すると文言表示
            if (this.todos.length == 0) this.noList = true;
        }
    }
})

//日付
function date(date, format) {
    if (!format) {
        format = 'YYYY/MM/DD hh:mm:ss'
    }

    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    return format;
}






