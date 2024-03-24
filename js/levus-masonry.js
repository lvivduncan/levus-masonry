'use strict'
{
    const headers = document.querySelectorAll('.levus-header li')
    const mains = document.querySelectorAll('.levus-main div')

    for(let i = 0; i < headers.length; i++){

        headers[i].addEventListener('click', function(){

            if(this.dataset.header === 'ALL') {

                for(let k = 0; k < mains.length; k++) {

                    mains[k].className = 'show'
                }
            } else {

                for(let k = 0; k < mains.length; k++){

                    if(mains[k].dataset.main.includes(headers[i].dataset.header)){

                        mains[k].className = 'show'
                    } else {
                        
                        mains[k].className = 'hidden'
                    }
                }            
            }


        })
    }
}