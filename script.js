const app = new Vue(
    {
        el: '#root',
        data:{
            immagine:"1.jfif"
            
        },
        methods:{
            funzioneClickRight:function(){
                if(this.immagine ==="1.jfif"){
                    this.immagine = "2.jfif";
                    return
                }if(this.immagine === "2.jfif"){
                    this.immagine = "3.jfif";
                    return
                }if(this.immagine === "3.jfif"){
                    this.immagine = "1.jfif";
                }
                 
            },
            funzioneClickLeft:function(){
                if(this.immagine ==="3.jfif"){
                    this.immagine = "2.jfif";
                    return
                }if(this.immagine === "2.jfif"){
                    this.immagine = "1.jfif";
                    return
                }if(this.immagine==="1.jfif"){
                    this.immagine = "3.jfif";
                }
            }
            

        }
        
    })