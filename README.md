# File drag and drop

 자세한 설명은 [File drag and drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)을 참고합니다. 



사용자가 파일(들)을 드랍(drop)할 때 drop 이벤트가 발생합니다. 

. 다음 드롭 핸들러에서 브라우저가 DataTransferItemList인터페이스를 지원하는 경우 getAsFile()메소드를 사용하여 각 파일에 액세스합니다. 그렇지 않으면 DataTransfer인터페이스의 files속성이 각 파일에 액세스하는 데 사용됩니다.


이 예제는 콘솔에 드래그된 파일의 이름을 쓰는 법을 보여줍니다. 
실제 어플리케이션에서는 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File)를 사용하여 파일을 처리하기 원할 수 있습니다. 







