
const tastoSinistro = document.getElementById("tastoSinistro")






const app = new Vue(
    {
        el: '#root',
        data:{
            immagine:"1.jfif",
            miaClasse1: "coloreWhite",
            miaClasse2: "",
            miaClasse3: "",
            timer: 0,
            
            
            
        },
        methods:{
            funzioneClickRight:function(){
                if(this.immagine ==="1.jfif" ){
                    this.immagine = "2.jfif";
                    this.miaClasse2 = "coloreWhite";
                    this.miaClasse1 = "";


                    return
                }if(this.immagine === "2.jfif"){
                    this.immagine = "3.jfif";
                    this.miaClasse3 = "coloreWhite";
                    this.miaClasse2 = ""

                    return
                }if(this.immagine === "3.jfif"){
                    this.immagine = "1.jfif";
                    this.miaClasse3 = "";
                    this.miaClasse1 = "coloreWhite";
                    

                }
                 
            },
            funzioneClickLeft:function(){
                
                if(this.immagine ==="3.jfif"){
                    this.immagine = "2.jfif";
                    this.miaClasse3 = "";
                    this.miaClasse2 = "coloreWhite"
                    return
                }if(this.immagine === "2.jfif"){
                    this.immagine = "1.jfif";
                    this.miaClasse2 = "";
                    this.miaClasse1 = "coloreWhite";
                    return
                }if(this.immagine==="1.jfif"){
                    this.immagine = "3.jfif";
                    this.miaClasse3 = "coloreWhite";
                    this.miaClasse1 = "";
                   
                }
            },
            firstClick:function(){
                if(this.immagine === "2.jfif" ||this.immagine ==="3.jfif" ){
                this.immagine = "1.jfif";
                this.miaClasse1 = "coloreWhite";
                this.miaClasse2 = "";
                this.miaClasse3 = "";
                return}
            },
            secondClick:function(){
                if(this.immagine === "1.jfif" ||this.immagine ==="3.jfif" ){
                this.immagine = "2.jfif";
                this.miaClasse2 = "coloreWhite";
                this.miaClasse1 = "";
                this.miaClasse3 = "";
                return}
            },
            thirdClick:function(){
                if(this.immagine === "2.jfif" ||this.immagine ==="1.jfif" ){
                this.immagine = "3.jfif";
                this.miaClasse3 = "coloreWhite";
                this.miaClasse2 = "";
                this.miaClasse1 = "";
                return}
            },
            autoPlay: function() {
                let app = this;
                this.timer = setInterval(function() {
                  app.funzioneClickRight();
                }, 3000);
           
            }
            
                
            
            

        }
        
    })


    //esempio florian
/* 
     changeImg(direction){
        let newIndex = this.activeImg + direction;
         if(newIndex < 0){
             newIndex = this.immagine.length-1;
         }else if(newIndex > ( this.immagine.length-1)){
             newIndex = 0
         }

         this.activeImg = newIndex
     } */

    