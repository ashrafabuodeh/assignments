const onMenueItemClick = (elementId)=>{

     const x =document.getElementById(elementId) ;
    const NumberOfItem = document.getElementsByClassName('Nav-items').length;
         for(let i = 0 ; i<NumberOfItem;i++){
            if(document.getElementsByClassName('Nav-items')[i].classList.contains('active')){
                document.getElementsByClassName('Nav-items')[i].classList.remove('active');
         }
        }

        document.getElementById(elementId).classList.add('active');
        
    }
    

 