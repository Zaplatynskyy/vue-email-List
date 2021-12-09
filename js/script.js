const app = new Vue({
    el : '#root',
    data : {

    },
    methods : {

    },
    created : function() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})