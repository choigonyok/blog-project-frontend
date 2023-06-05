import { Editor } from "@toast-ui/react-editor";
import Header from "../Header/Header";
import ContentsViewer from "../UI/ContentsViewer";
import abc from "../Assets/img9.jpeg";
import "./Postpage.css";
import EditorBox from "../UI/EditorBox";
import Footer from "../UI/Footer";
import Card from "../UI/Card";

const Postpage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="image-container">
          <input type="button" className="postbutton" value="<" />
          <img className="image" alt="my" src={abc} />
          <input type="button" className="postbutton" value=">" />
        </div>
        <div className="post-title">
          <div className="post-tagsbox">
            <button className="post-tags__button">GO</button>
            <button className="post-tags__button">GIN</button>
            <button className="post-tags__button">PROJECT</button>
          </div>
          <p className="post-title__item">
            프로젝트 2-1 : 블로그 개발하기 VER.2
          </p>
          <p className="written-date">2023/06/01</p>
        </div>
        <div className="post-body">
          <ContentsViewer
            contents={`
  # PROJECT #1
  
  ## **CONTENTS**

  
          1. INTRO
          2. WHAT IS GIT?
          3. WHAT IS GITHUB?
          4. GIT COMMAND
          5. COMMIT MASSAGE
  

  
  ---
  
  ## **1. INTRO**
    
  > 개발자라면 깃헙 써야지!
  >

  
  깃과 깃헙을 알게된 지 얼마 되지 않았습니다. **깃(GIT)** 은 뭐고 **깃헙(GITHUB)** 은 또 무엇일까요?
  

  
  ---
  ### 2. WHAT IS GIT?
  

  
  ##### 위키백과
  
          깃(GIT)은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 스냅샷 스트림 기반의 분산 버전 관리 시스템이다.
  
  
  
  개발은 보통 실무에서 여러 개발자들과 함께 진행하게 됩니다. 분야가 다른 BE, FE, 디자이너 등이 협업하기도 하고, 규모가 크기 때문에 같은 백엔드 업무를 맡아도 여러 백엔드 엔지니어가 함께 한 프로젝트를 개발하는 일들이 흔할 겁니다.
  

  
  어떻게 여러 사람들이 한 프로그램을 개발할 수 있단 것일까요? 노트북 하나를 돌려가며 개발하는 걸까요?
  >그럴리가요
  

  
  그 답이 바로 **깃**에 있습니다. 깃을 통해 개발자들은 각자의 로컬 환경(개인 컴퓨터 등)에서 각자 작성한 코드를 하나의 **공유저장소**(REPOSITORY)에 **저장**(PUSH)하고, 다른 개발자들이 작성한 코드들을 **가져와서**(PULL) 함께 협업할 수 있게 해주는 시스템입니다.
  
  어떤 원리로 깃이라는 시스템이 그걸 가능하게 해주는 걸까요? 깃의 정의를 보면,
  

  깃은
  
  1. 스냅샷 스트림 기반의 
  2. 분산 버전 관리 시스템
  
  
  이라고 합니다.
  

  
  ### 스냅샷 스트림
  

  
  스냅샷은 **사진**입니다. 캡처 화면을 스냅샷이라고 부르기도 하죠. 깃은 말그대로 특정 시점의 데이터 상태를 사진 찍듯이 기록해두는 겁니다. 여기서 데이터 상태란 디렉토리 구조, 파일 내용, 파일의 존재여부 등이 될 수 있겠죠. 그리고 깃은 그 스냅샷들의 **STREAM**을 통해서 어디서 어떤 부분이 어떻게 수정되었는지를 기록하고 있는 겁니다.
  

  
  > 모든 스냅샷을 다 기록하고 있으면 너무 메모리 낭비가 심하지 않을까요?
  >

  
  그래서 깃은 **마지막**으로 찍은 스냅샷만 저장하고 있습니다. 그 이전 기록들은 마지막 스냅샷으로부터 어떤 것들이 어떻게 변화했는지만 기록하고 있는거죠.
  

  
  ### **분산 버전 관리 시스템**
  

  
  > 내가 전에 서있었던 곳은 지금 서있는 곳에서 뒤로 한 발, 왼쪽으로 두 발가면 나와!
  >

  
  이런 느낌이라고나 할까요? 그렇기 때문에 깃은 언제든지 과거로 돌아갈 수 있는 것입니다. 이는 곧 버전 관리가 가능해짐을 의미합니다.
  
  **버전 관리**는 말은 쉽게 말하면 백업과 비슷하다고 할 수 있습니다.
  
  예를 들어, 배포된 어플리케이션에 새로운 기능을 추가하고, 재배포를 했습니다. 그런데 그 기능을 업데이트하다 커다란 버그가 생긴 걸 알게됐다면 어떻게 해야할까요? 
  
  다시 업데이트 하기 전 상태로 배포하고, 버그를 수정한 뒤에 재배포 해야겠죠! 그럴 때 깃이 찍어둔 스냅샷을 보고 과거 버전으로 돌아갈 수 있는 것입니다. 
  
  버그를 만든 사람이 가장 해결을 잘 해낼 수 있을텐데, 누가 버그를 발생시켰는지는 어떻게 알까요? 일일이 한 사람 한 사람 물어보면서 다녀야할까요? 깃은 이런 불편한 부분들도 자동적으로 해결해줍니다. 커밋 시간, 커밋 작성자 등을 식별할 수 있게 해주죠.
  

  
  ---
  ### **3. WHAT IS GITHUB?**
  

  
  깃헙은 개발자들이 깃이 찍은 스냅샷들을 백업하고, 서로 공유할 수 있게 해주는 클라우드 서비스라고 할 수 있습니다.
  

  
  > GIT은 사진사, GITHUB는 사진을 올리는 인스타그램
  >

  
  이렇게 이해하면 편할 것 같아요.
  

  
  ---
  ### **4. GIT COMMAND**
  

  
  깃헙을 사용하려고 하면 기본적으로 이 네 가지 COMMAND는 꼭 만나게 됩니다. 
  
  * ADD : 해당 파일을 Staging 합니다.
  
  STAGING은 ADD COMMAND는 입력 당시의 파일 버전을 깃이 기억하고 있겠다는 의미입니다. 이후 여러가지 파일들을 추가로 ADD 할 수 있고, 이후 COMMIT을 하게되면 파일들은 각자가 STAGING된 시점의 버전으로 COMMIT이 되는 겁니다. 
  
  * COMMIT : 버전을 업데이트합니다.
  
  COMMIT할 때, 미리 ADD COMMAND로 STAGING 되어있던 파일들이 업데이트 되는 것이죠. 이때, 개발자는 **커밋 메시지** 라는 것을 기록할 수 있습니다. 커밋의 내용이 어떤 것인지 기록해서, 더 효율적인 개발을 가능하게 해주는 것이죠. 나와 다른 개발자가 나중에 커밋 메시지를 보고 어떤 것들이 수정되었는지 확인할 수 있습니다.
  
  * PUSH : COMMIT된 파일을 실질적 원격 저장소인 GITHUB에 올립니다.
  
  * PULL :  원격 저장소(깃헙) 레포지토리에 저장되어있는 파일을 개발자의 로컬 환경으로 끌어옵니다.
  

  
  ---
  ### **5. COMMIT MESSAGE**
  

  
  말씀드린 것처럼, 커밋 메시지는 자신만을 위한 것이 아니라, **다른 개발자를 위한 것**이기도 합니다. 때문에 커밋 메시지를 쓸 때는 일련의 정해진 **규칙**을 따르는 것이 좋습니다. 
  
  * 제목과 본문을 한 줄 띄어 구분
  * 제목은 50자 이내
  * 제목 첫 글자는 대문자
  * 제목 끝에 마침표 X
  * 제목은 명령문으로, 과거형 X
  * 본문의 각 행은 72자 이내 (줄바꿈 사용)
  * 본문은 어떻게 보다 무엇을, 왜에 대하여 설명
  
  기본적으로 커밋 메시지는 **HEADER**, **BODY**, **FOOTER**
  로 이루어져 있습니다. 바디와 푸터는 선택사항이라고 합니다.
  
  커밋 메시지의 맨 앞부분에는 **타입**을 붙이게 되는데요, 타입의 내용은 이러합니다.
  
  
          FEAT : 새로운 기능 추가
          FIX : 버그 수정
          BUILD : 빌드 관련 수정
          CHORE : 패키지 매니저 수정, 그 외 자잘한 수정
          CI : CI 관련 설정 수정
          DOCS : 문서/주석 수정
          STYLE : 코드 스타일,format에 대한 수정
          REFACTOR : 기능의 변화가 아닌 코드 리팩토링
          TEST : 테스트 코드 추가/수정
          RELEASE : 버전 릴리즈
  
  
  커밋을 할 때는 코드간의 충돌이 일어날 수 있습니다. 두 개발자가 코드의 같은 부분을 다르게 수정한 경우를 예로 들 수 있겠습니다. 한 함수를 두 개발자가 각자 다른 결과를 내도록 개발하고 동시에 커밋을 한 경우죠. 이런 일들을 막고, 또 알리기 위해서 CI/CD 툴을 사용하기도 합니다. CI/CD 툴에 대해서는 추후에 공부해서 글을 작성해보도록 하겠습니다.
  
  
  > 작성한 내용에 잘못된 정보나 함께 공유하고 싶은 정보가 있다면 기탈없이 말씀 남겨주세요.
  
  `}
          />
        </div>
      </div>
      <div className="related-post__container">
        <p className="related-post__content">- RELATED POSTS -</p>
      </div>
      <Card/>
      <Footer />
    </div>
  );
};
export default Postpage;
