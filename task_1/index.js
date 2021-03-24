const onMenueItemClick = (elementId)=>{
    const numberOfItem = document.getElementsByClassName('nav-items').length;
         for(let i = 0 ; i < numberOfItem; i++){
            if(document.getElementsByClassName('nav-items')[i].classList.contains('active')){
                document.getElementsByClassName('nav-items')[i].classList.remove('active');
         }
        }
        document.getElementById(elementId).classList.add('active');       
    } 
    