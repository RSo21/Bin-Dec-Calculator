import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";
import "./style.scss";



$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
})


$(document).ready(function() {
    const decCalc = new DecCalculator(".dec-calculator");
})