function showCheckedTxt(submitBtn, labelParent, label, labelTxt, datInput, labelDateBegin, labelDateEnd, labelTopic, labelPlace, labelProduce, labelUnit, showTxt, newTagToShowTxt) {
  // var checkBtns = document.querySelectorAll(checkBtn)
  var submitBtns = document.querySelectorAll(submitBtn)
  var labelParents = document.querySelectorAll(labelParent)
  // var labels = document.querySelectorAll(label)
  var dateBegin = '', dateEnd = '', topicText = '', placeText = '', produceText = '', unitText = '', allTexts = ''
  var showText = document.querySelector(showTxt)
  var newTag = document.createElement(newTagToShowTxt)
  showText.appendChild(newTag).classList.add('mt-2')

  // for (var i = 0;i < labelParents.length;i++) {
  //   if (labelParents[i].querySelector(label).innerHTML == labelTopic) {
  //     labelParents[i].classList.add("topic")
  //   }
  //   if (labelParents[i].querySelector(label).innerHTML == labelPlace) {
  //     labelParents[i].classList.add("place")
  //   }
  //   if (labelParents[i].querySelector(label).innerHTML == labelProduce) {
  //     labelParents[i].classList.add("produce")
  //   }
  //   if (labelParents[i].querySelector(label).innerHTML == labelUnit) {
  //     labelParents[i].classList.add("unit")
  //   }
  // }

  for (var i = 0;i < submitBtns.length;i++) {
    if (submitBtns[i].classList.contains('clear')) {
      submitBtns[i].onclick = function () {
        for (var i = 0;i < labelParents.length;i++) {
          if (labelParents[i].querySelector(labelTxt) != null) {
            labelParents[i].querySelector(labelTxt).innerHTML = ''
          }
          if (labelParents[i].querySelector(label).innerHTML == labelDateBegin | labelParents[i].querySelector(label).innerHTML == labelDateEnd) {
            labelParents[i].querySelector(datInput).value = ''
          }
        }
        dateBegin = '', dateEnd = '', topicText = '', placeText = '', produceText = '', unitText = ''
      }
    }
    if (submitBtns[i].classList.contains('submit')) {
      submitBtns[i].onclick = function () {
        for (var i = 0;i < labelParents.length;i++) {
          if (labelParents[i].querySelector(label).innerHTML == labelDateBegin && labelParents[i].querySelector(datInput).value != '') {
            console.log(labelParents[i].querySelector(datInput).value)
            dateBegin = labelDateBegin + '：' + labelParents[i].querySelector(datInput).value + '　　'
          }
          if (labelParents[i].querySelector(label).innerHTML == labelDateEnd && labelParents[i].querySelector(datInput).value != '') {
            dateEnd = labelDateEnd + '：' + labelParents[i].querySelector(datInput).value + '　　'
          }
          if (labelParents[i].querySelector(label).innerHTML == labelTopic && labelParents[i].querySelector(labelTxt).innerHTML != 'picker-items-holder' && labelParents[i].querySelector(labelTxt).innerHTML != '') {
            topicText = labelTopic + '：' + labelParents[i].querySelector(labelTxt).innerHTML + '　　'
            console.log(labelParents[i].querySelector(labelTxt).innerHTML)
          }
          if (labelParents[i].querySelector(label).innerHTML == labelPlace && labelParents[i].querySelector(labelTxt).innerHTML != 'picker-items-holder' && labelParents[i].querySelector(labelTxt).innerHTML != '') {
            placeText = labelPlace + '：' + labelParents[i].querySelector(labelTxt).innerHTML + '　　'
            console.log(labelParents[i].querySelector(labelTxt).innerHTML)
          }
          if (labelParents[i].querySelector(label).innerHTML == labelProduce && labelParents[i].querySelector(labelTxt).innerHTML != 'picker-items-holder' && labelParents[i].querySelector(labelTxt).innerHTML != '') {
            produceText = labelProduce + '：' + labelParents[i].querySelector(labelTxt).innerHTML + '　　'
            console.log(labelParents[i].querySelector(labelTxt).innerHTML)
          }
          if (labelParents[i].querySelector(label).innerHTML == labelUnit && labelParents[i].querySelector(labelTxt).innerHTML != 'picker-items-holder' && labelParents[i].querySelector(labelTxt).innerHTML != '') {
            unitText = labelUnit + '：' + labelParents[i].querySelector(labelTxt).innerHTML
            console.log(labelParents[i].querySelector(labelTxt).innerHTML)
          }
        }
        allTexts = dateBegin + dateEnd + topicText + placeText + produceText + unitText
        showText.lastChild.innerHTML = allTexts
      }
    }
  }
}
showCheckedTxt('#narrow-down-modal .modal .modal-btns-wrapper button', '.filter-set-wrapper', '#narrow-down-modal .modal p.label', '.picker-picked-items-wrapper>p', '.date-picker', '演出日期範圍(起)', '演出日期範圍(迄)', '主題類別', '演出場館', '節目製作', '典藏單位', '#filter-fields .narrow-down-btn-wrapper', 'div')
