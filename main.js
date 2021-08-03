import referenceUIMachineOptions from 'itk-viewer-reference-ui/src/referenceUIMachineOptions.js'

import style from 'itk-viewer-reference-ui/src/ItkVtkViewer.module.css'

import createScreenshotButton from 'itk-viewer-reference-ui/src/Main/createScreenshotButton.js'

function modifiedCreateMainInterface(context) {
  const mainUIGroup = document.createElement('div')
  mainUIGroup.setAttribute('class', style.uiGroup)
  context.uiGroups.set('main', mainUIGroup)

  const mainUIRow1 = document.createElement('div')
  mainUIRow1.setAttribute('class', style.mainUIRow)
  mainUIGroup.appendChild(mainUIRow1)

  createScreenshotButton(context, mainUIRow1)

  context.uiContainer.appendChild(mainUIGroup)
}

const uiMachineOptions = { ...referenceUIMachineOptions }
const testUIMainActions = { ...uiMachineOptions.main.actions }
testUIMainActions.createMainInterface = modifiedCreateMainInterface

const testUIMain = { ...uiMachineOptions.main }
testUIMain.actions = testUIMainActions
uiMachineOptions.main = testUIMain

export default uiMachineOptions
