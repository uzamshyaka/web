import { onMounted } from "vue";
 export function userChat () {
        onMounted( () => {
            if(!document.getElementById(yeaster-id)){

                 const script= document.createElement('script');
                 script.id='yeaster.chat';
                 script.src="https://demulla.ras.yeastar.com/live_chat.v1.0.0.js?channelNumber=LC00000";
                 script.async=true;

                 document.body.appendChild(script);




            }



        } );
    }



 