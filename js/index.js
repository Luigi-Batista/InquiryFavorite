class Tool{
    constructor(){
        this.btns = document.querySelectorAll('#btns button')
        this.close_btn = document.querySelector('.close-btn')
        this.alt = document.querySelector('#alterar')
        this.modal_user = document.querySelector('.modal.alt-user')
        this.space_list = document.querySelector('.space-list')
        this.hambfloat = document.querySelector('#hamb-float')
        this.char = document.querySelector('#char')
        this.descri = document.querySelector('#descri')
        this.pass = document.querySelector('#pass')
        this.password = document.querySelector('#password')
    }

    main(){
        this.CaracterLength()
        this.Efects()
        this.EventsClick()
    }

/* Classes Principais */
    CaracterLength(){

        this.descri.addEventListener('input', (NowText) => {

            this.char.innerHTML = `${NowText.target.value.length}/600`

        }, false)
        
    }

    EventsClick(){

        /* Módulos de Efeitos */
        this.EventPass()
        this.EventClose()
        this.EventHamb()
    }

    Efects(){

        /* Módulos de Efeitos */
        this.EfectHover()
        this.EfectAnimation()

    }

/* ----------------------------------------------------- */

    EfectHover(){
        /*Sainda e Entrada de Mouse -> #delete*/
        this.btns[0].addEventListener('mouseover', ()=>{
            this.btns[0].style.color='var(--ColorIcon)'
            this.btns[0].style.backgroundColor='white'
            this.btns[1].style.color='white'
            this.btns[1].style.backgroundColor='var(--ColorBack)'
        })
        this.btns[0].addEventListener('mouseout', ()=>{
            this.btns[0].style.color='white'
            this.btns[0].style.backgroundColor='var(--ColorBack)'
            this.btns[1].style.color='var(--ColoIcon)'
            this.btns[1].style.backgroundColor='white'
        })

        /*Sainda e Entrada de Mouse -> #alterar*/
        this.btns[1].addEventListener('mouseover', ()=>{
            this.btns[1].style.color='white'
            this.btns[1].style.backgroundColor='var(--ColorBack)'
            this.btns[0].style.color='var(--ColorIcon)'
            this.btns[0].style.backgroundColor='white'
        })
        this.btns[1].addEventListener('mouseout', ()=>{
            this.btns[1].style.color='var(--ColorIcon)'
            this.btns[1].style.backgroundColor='white'
            this.btns[0].style.color='white'
            this.btns[0].style.backgroundColor='var(--ColorBack)'
        })
    }

    EfectAnimation(){

        this.alt.addEventListener('click', ()=>{
            document.querySelector('.modal.alt-user').classList.add('modal-active')
        })

    }

    EventPass(){

        this.pass.addEventListener('click', (pass)=>{
            
            this.pass.classList.forEach((Clapass)=>{
                
                if(Clapass == 'fa-eye-slash'){
                    pass.target.classList.remove('fa-eye-slash')
                    pass.target.classList.add('fa-eye')
                    this.password.setAttribute('type', 'text')
                }else if(Clapass == 'fa-eye'){
                    pass.target.classList.remove('fa-eye')
                    pass.target.classList.add('fa-eye-slash')
                    this.password.setAttribute('type', 'password')
                }

            })
            
        })

    }

    EventHamb(){

        this.hambfloat.addEventListener('click', ()=>{
            document.querySelector('.space-list').classList.add('modal-active')
            console.log(document.querySelector('.space-list'))
        })

    }

    EventClose(){

        this.modal_user.addEventListener('click', (element)=>{
            if( element.target == this.modal_user || element.target == document.querySelector('.fa-solid.fa-xmark')){
                this.modal_user.classList.remove('modal-active')
            }
        })

        this.space_list.addEventListener('click', (element)=>{
            if(element.target == this.space_list || element.target == this.close_btn){
                this.space_list.classList.remove('modal-active')
                
            }
        })

    }
}

/**
 * Execução de classe JS
 */
const tool = new Tool();
tool.main();