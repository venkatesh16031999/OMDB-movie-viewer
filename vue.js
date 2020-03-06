var drop=new Vue({
    el:"#drop",
    data:{
        msg:"hello",
        search:"",
        moviedetails:[]
    },
    methods:{
        searchFunction(){
        //    var value=document.getElementById("search").value;

        axios.post("http://www.omdbapi.com/?t="+this.search+"&apikey=f41861a4")
          .then((response) => {
            this.moviedetails=[];
            this.moviedetails.push(response.data);
          })

           console.log(this.search);
        }
    }
});