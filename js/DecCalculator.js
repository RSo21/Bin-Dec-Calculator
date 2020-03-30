import { Calculator } from "./Calculator";


class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log(this.getName());
    }

    changeNumber(root){
        let activeElement = root.find('.active');
        activeElement.attr('contentEditable', 'true');

        activeElement.focus(() =>{
            $(`<p class = "tooltip">Aby dodać, kliknij!</p>`).appendTo(".operator-bar-tooltip").fadeOut(1000);
          });
    }


    initEvents(){
        super.initEvents();
        let plusEl = $('.operator-bar').find('span').eq(1);
        console.log(plusEl);

        plusEl.on('click', (e)=>{
            this.checkNumber();
            this.updateResult();

        })
        }

        add(numberX, numberY){
            let result = [0,0,0,0,0,0,0,0,0];

            for(let i = numberX.length - 1; i >= 0; i--) {
                let carryDec =  numberX[i] + numberY[i] + result[i];

                if(carryDec > 10) {
                    result[i] = carryDec - 10;
                    result[i-1] = 1;
                } else {
                    result[i] = carryDec;

                }
            }

            return result;

        }

        updateResult(){
            let root =  this.$calculatorDOMElement;
            let $resultNumber = root.children(".group-number").children(".result-bit");
        
            for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) { 
              let valueResult = parseInt( $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i])); 
            }
          }
        

}

export { DecCalculator  };