# File drag and drop


이 예제는 콘솔에 드래그된 파일의 이름을 쓰는 법을 보여줍니다.  실제 어플리케이션에서는 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File)를 사용하여 파일을 처리하기 원할 수 있습니다.  자세한 설명은 [File drag and drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)을 참고합니다. 


> 이 예제는 Code Swing에서 동작하지 않습니다. 브라우저에서 test.html을 로드하여 실행하면 됩니다. 

다음과 같이 파일을 드롭할 요소를 만듭니다. drop과 dragover 핸들러를 설정합니다. 
```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

요소를 꾸미기 위해 CSS를 작성합니니다. 
```css
#drop_zone {
    border: 5px solid blue;
    width: 200px;
    height: 100px;
  }
```  

사용자가 파일(들)을 드랍(drop)할 때 drop 이벤트가 발생합니다.  드롭 핸들러에서 브라우저가 DataTransferItemList인터페이스를 지원하는 경우 getAsFile()메소드를 사용하여 각 파일에 액세스합니다. 그렇지 않으면 DataTransfer인터페이스의 files속성이 각 파일에 액세스하는 데 사용됩니다.

dragover이벤트 핸들러 preventDefault()는 브라우저의 기본 드래그 앤 드롭 핸들러를 끄기 위해 호출합니다.


```jsx
//  OS에서 브라우저로 파일을 드래그할 때 이벤트가 발생하지 않습니다 dragstart.dragend
function dropHandler(ev) {
    console.log('File(s) dropped');
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }


  function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // 다음 dragover이벤트 핸들러 preventDefault()는 브라우저의 기본 드래그 앤 드롭 핸들러를 끄기 위해 호출합니다.
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
```  









