const sections = document.querySelectorAll('.section');
const sectBts = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];

function pageTransitions(){
    //Button click active class
        sectBtn.forEach(function (button) {
            button.addEventListener("click", function () {
              const prevActiveButton = document.querySelector(".active-btn");
              prevActiveButton.classList.toggle("active-btn");
              this.classList.toggle("active-btn");
            });
          });

    //sections Active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBts.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById (id);
            element.classList.add('active');
        }
    })
}

pageTransitions();