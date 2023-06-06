## **리액트로 바위치기**
---
<br/>

    이전 프로젝트에서 HTML과 CSS로 UI/UX만 간단히 만들고,
    DB CRUD부터 HTML 렌더링, 라우팅, 리다이렉션 등 모든 작업을 서버에서 관리하는 아키텍처로 개발
  
<br/>

BE / FE의 역할에 대해 정확히 알지 못했고, 첫 번째 프로젝트를 진행하면서 프론트엔드 학습의 필요성을 느꼈음.

<br/>

React.js를 학습하면서 동시에 바로 개발을 진행하여, 기존 개발되어있던 블로그의 기능들을 FE/BE로 분리하여 재개발하는 블로그 프로젝트 Ver.2 를 기획하게 됨.

<br/>

### **기술스택**

* BE : Go(language), Gin(web framework)
* FE : React.js(JS library), JS, HTML, CSS
* DB : MySQL
* Version Management : Git / Github

<br/>

### **학습목표**

* RESTful API 적용
* React 적용
* FE / BE 역할 이해





(6/6)
CORS 문제.
-> gin의 CORS 미들웨어 추가 (허용할 오리진 설정)

DB 읽어오기 문제.
-> SCAN()은 레퍼런스로 읽어와야함

JSON형식으로 데이터 송수신
ShouldBindJSON / Marshall
content type 헤더설정을 해줘야함 (application/json)->JSON형식으로 전송하기때문에

Reader로 요청본문 읽고, Writer로 응답본문 전송

useEffect() 사용

* 다른 언어로 작성된 클라이언트와 서버가 통신하는 걸 구현하고 직접 눈으로 확인하니까 너무 신기하고 재미있음
* 클론코딩이 어플리케이션을 분석해서 기능을 똑같이 구현하는게 아니라 누가 하는걸 보고 따라하면서 코딩하는 의미라면, 클론코딩 하지 않고 내가 직접 공부하고 생각하면서 구현하니까 느끼고 배우는 것이 많은 것 같음
* 1차 프로젝트에서 배웠던 Go는 겉핥기 수준이었고 이번 2차 프로젝트를 통해 Go에 대한 감은 더 확실히 잡은 것 같음
* 1차 프로젝트 개발 1주만에 끝나서 프론트/백 분리 개발도 쉽게 생각했는데, 생각보다 더 오래 걸릴 것 같음 그래도 마감기한은 1달을 넘기지 않도록 7월 중순 안에 마무리 해보자! 이후에는 디자이너와 협업을 통해 더 완성도 높은 어플리케이션을 개발해야지

+ useEffect에 대한 공부와, Git branch에 대한 공부 필요함. 깃브랜치를 쓰면 아마 서버/클라이언트 분리할 수 있지 않을까?

* 리액트만으로 SPA 블로그를 충분히 개발할 수 있다고 하는 것 같다. 그렇지만 내 목적은 프런트를 깊이 아는 것이 아니라 전체적인 웹 개발의 흐름을 잡고, 프론트보단 백에 더 초점이 맞춰져있어서, 굳이 서버/클라이언트 아키텍처로 개발하기 선택했다. 프런트는 앞으로 개인 프로젝트들을 해나갈 때 UI/UX적으로나 프런트적으로 불편을 느끼지 않을 정도로의 지식만 갖추기로 했다. 물론 그것 조차도 금방 해낼 수 있는 건 아니겠지만!


(6/7)

<h1>{responseData[0].Title}</h1> -> 인덱스를 꼭 써줘야함

DB 컬럼 추가 쿼리 -> ALTER TABLE `테이블명` ADD `컬럼명` 자료형
DB 레코드 추가 쿼리 -> 
 INSERT INTO [TABLE_NAME] (COL_NAM1, COL_NAME2...)
 VALUES (INPUT_VALUE1, INPUT_VALUE2...)

**내가 필요했던건 위가 아니라 아래;;**

DB 레코드 수정 쿼리 -> 
 UPDATE [TABLE_NAME] SET [COL_NAME1] = [VALUE1], ...... WHERE [CONDITION];

--------
 이미지 전송문제.
 ->리액트에서는 이미지를 경로만 쓰면 이미지를 출력하는 기능을 지원 안함
 하나하나 이미지 파일별로 import 해야하는데 그럼 동적으로 저장은 할 수 있어도 동적으로 이미지를 불러오는 게 불가능함
 ->글 하나 쓸때마다 웹서버 들어가서 이미지 import해주고 재배포 할거야? 말도 안됨
 파일째로 import하는 것도 불가능 그럼 방법은?

 1. 이미지를 base64로 변환해서 db에 저장하기 -> 데이터 사이즈가 기존 이미지 크기보다 커짐 (비효율적), base64로 인코딩,디코딩하는데 오버헤드가 너무 큼
 2. 이미지를 프런트엔드에서 저장/관리하기 -> 보안 위험 + 어차피 동적 import 문제는 해결되지 않음
 3. URL을 통한 파일 업로드/다운로드!!!!!!!!
   -> 가능한 이유? import는 컴파일 타임에 이미지를 가져오는데 url은 url이 요청될 때(런타임) 동적으로 이미지를 가져오기 때문에 import 없이도 이미지 출력이 가능하다!!!!!!



처음엔 그냥 어차피 같은 인스턴스 안에 프런트/백이 있으니까 같은 디렉토리를 공유하는 셈이고, 절대경로를 통해서 그대로 옮겨오면 안되나? 싶었음
근데 새롭게 알게된 지식....
서버는 컴퓨터다!라는 말을 이해만하고 적용을 못했다. 백과 프런트, DB를 다른 인스턴스에 분리해서 운영하는게 일반적 -> 보안을 위해서
그럼 인스턴스가 다르니까 프런트에서 백에 절대경로로 접근하는게 불가능! 다른 컴퓨터니까 당연히!
DB/백/프런트가 같은 인스턴스에서 포트만 다르게 쓰는 게 일반적인 건 줄 알았음

URL 업다운로드와 경로 업다운로드의 차이?
서버가 클라이언트로 파일을 업로드, 클라이언트는 해당 파일을 다운로드
클라이언트가 서버로 파일을 업로드, 서버는 클라이언트가 전송한 파일을 다운도르
이 개념인 줄 알았는데, 그게 아니라
업로드 : 클라이언트 -> 서버
다운로드 : 서버 -> 클라이언트
이 개념이 더 일반적으로 쓰이는 것 같다. 사용자 관점에서!

물론 서버에서 서버로 업로드 다운로드 다 할 수도 있는데, 굳이..?
**파일을 업로드하면 파일은 어디로 가는거야??**
처음엔 url로 파일을 업로드하면 파일이 웹 브라우저에 저장되는건가? 생각했음.
나는 이전 개념으로 알고있었기 때문에,
클라이언트----(업로드)--->>>(미상의 어떤 매개체)---(다운로드)--->>>서버
서버----(업로드)--->>>(미상의 어떤 매개체)---(다운로드)--->>>클라이언트
로 생각했고, 그 매개체가 브라우저인가, 아니면 뭐 OS 벤더에서 파일 업다운로드용 서버를 제공해주는 건가 했던 것임

URL은 리소스의 위치를 나타내는 주소! URL은 GET요청!! 이미지 파일등을 요청할 때 굳이 fetch 등으로 get method를 요청하지 않아도 url만 입력하면 요청이 됨. 대신 브라우저 url에 해당 요청이 다 보여서 보안적으로 좋진 않음. 간단한 파일 다운로드 정도?

url은 같은 네트워크 상에 있으면 다른 인스턴스여도 파일 다운로드가 가능함. url은 기본적으로 ip주소를 DNS를 통해 문자열로 변환한 것이기 때문! 결국 같은 네트워크 안에 있는 인스턴스면 스위치의 MAC table과 ARP, DNS를 통해서 서로 통신할 수 있기 때문에, GET요청을 하는 해당 인스턴스의 ip주소로 요청을 보내는 것과 마찬가지!! 
그래서 URL을 통해 같은 네트워크 안의 누구든 url을 통해 파일을 다운로드(GET요청)할 수 있음!!
물론 다운로드하려면 다운로드하는 파일이 있는 서버가 writer pointer로 응답을 해줘야겠지!! 안해주면 암만 url 요청 찍찍 보내도 아무것도 안옴
근데 백과 프런트를 각기 다른 인스턴스에 배포하면 같은 네트워크로 설정을 어떻게 하지? 네트워크 수업 내용을 적용하려면 스위치가 있어야하는데, AWS는 서버 가상화인데!? 가상 스위치가 있나!? ->AWS의 VPC 이용하면 됨!!

그럼 업로드는!? 업로드는 이미 구현해봤다!!!
첫번째 프로젝트에서 사용자가 업로드한 이미지파일을 multipart/form-data 형식으로 POST 요청받았다. 이건 해봐서 쉽게 구현할 수 있을 듯 하다.
아직 admin page는 구현하지 않아서 아마 하드코딩 데이터로 필요한 부분들을 다 구현한 뒤에 admin page를 마지막에 개발할 것 같다!

-> 이번 프로젝트엔 백, 프런트를 나누긴 했지만 인스턴스 하나에 개발을 했는데 다음 프로젝트때는 도커를 공부해서 각 서버를 가상화해봐야겠다.

마지막으로 

추가문제
1. 요청 url을 localhost:8080/로 하면 안됨 ->http://localhost:8080/로 해야함
2. 서버에서 파일을 open할 때 /Images/img9.jpeg 이나, ./Images/img9.jpeg로 하면 안됨 -> src/Images/img9.jpeg로 해야함 무슨 기준인지....
3. 에러처리를 위한 상태코드 설정을 보는게 디버깅에 도움이 많이 되었음 상태코드 500 = http.StatusInternalServerError

----리액트에서 URL 요청----

        <img className="postcard-image" alt="img" src="http://localhost:8080/Images/img9.jpeg"/>
 
---서버에서 GET요청 응답 구현----
        eg.GET("/", func (c *gin.Context){
                fmt.Println("접근!!!")
                file, err := os.Open("src/Images/img9.jpeg")
                if err != nil {
                    // 파일 열기에 실패한 경우 에러 처리
                    http.Error(c.Writer, "파일 오픈 실패", http.StatusInternalServerError)
                    return
                }
                defer file.Close()
                _, err = io.Copy(c.Writer, file)
                if err != nil {
                // 파일 전송에 실패한 경우 에러 처리
                http.Error(c.Writer, "Failed to send file", http.StatusInternalServerError)
                return
                }
            })


// 파일 정보 가져오기
fileInfo, err := file.Stat()
if err != nil {
  // 파일 정보 가져오기에 실패한 경우 에러 처리
  http.Error(c.Writer, "파일 정보 오픈 실패", http.StatusInternalServerError)
  return
}
c.Writer.Header().Set("Content-Disposition", "attachment; filename="+fileInfo.Name())
  c.Writer.Header().Set("Content-Type", "application/octet-stream")
  c.Writer.Header().Set("Content-Length", strconv.FormatInt(fileInfo.Size(), 10))
//이부분은 없어도 되는데 헤더에 그냥 정보 넣어주기용으로 넣어도 됨

-----동적으로 수정하기------

    eg.GET("/Images/:imgname", func (c *gin.Context){
            imgname := c.Param("imgname")
            file, err := os.Open("src/Images/"+imgname)
            ...
    })

//이렇게 수정해주면 /Images/ 뒤에 나오는 값을 파라미터로 받을 수 있고, 클라이언트는 원하는 파일을 동적으로 다운로드 받을 수 있다!!!

--------------------

이미지 (6/6-1)
DB에 저장되는 imgpath를 변경해서 DB의 imgpath를 읽어오면 바로 URL 요청을 할 수 있도록 수정했다
나중에 어드민 페이지에서 포스트 작성 후 DB로 POST 요청을 보낼 때 imgpath를 
http://localhost:8080/Images/{imagename}.jpeg
형식으로 저장하는 걸 구현하면 될 것 같다.

동영상 (6/6-1)
영상처럼 태그를 클릭하면 해당 태그가 있는 post의 정보를 서버에 요청
서버는 DB에서 data를 긁어와서 json형식으로 응답
이미지는 DB의 imgpath에 저장된 URL로 자동 GET 요청을 보내고
서버는 서버에 저장된 image 파일을 응답
하는 기능을 구현했다.

동영상 (6/6-2)
태그가 있는 post들만 사용자에게 보이도록 구현했다.

이어서는 처음엔 모든 작성된 글들이 최신 게시 순으로 전부 보이게 구현하면 될 것 같다.

+시험기간이라 깃 브랜치까지 동시에 공부하진 못하고 있어서 아직 GO파일을 커밋하지 못하고 있는데, 날아갈까봐 불안불안하다
시험 끝나면 깃 브랜치부터 어서 공부해야지
**+dev-blog랑 dev-blog ver.2 랑 이름 앞 부분이 같아서 dev-blog 태그 선택하면 dev-blog ver.2까지 같이 표시됨. 해결해야함**



onClick event 핸들러에 파라미터를 전달하려면,

onClick={cardClickHandler(value)}
이게 아니라!
onClick={()=>{cardClickHandler(value)}}
이렇게 화살표함수를 사용해야한다.