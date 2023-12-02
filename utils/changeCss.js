export default function changeCSS(element, newRule, newValue)
{
    let thisCSS=document.styleSheets[0]
    let ruleSearch=thisCSS.cssRules? thisCSS.cssRules: thisCSS.rules
    for (i=0; i<ruleSearch.length; i++)
    {
        if(ruleSearch[i].selectorText==typeAndClass)
        {
            var target=ruleSearch[i]
            break;
        }
    }
    target.style[newRule] = newValue;
}