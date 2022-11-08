

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