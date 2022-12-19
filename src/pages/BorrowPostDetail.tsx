import Caution from './../components/postDetail/Caution';

export default function BorrowPostDetail() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="w-[800px] flex flex-col justify-center mx-auto text-b-text-black">
        <div className="h-80">header</div>
        <div className="mb-6 text-3xl">빌리기</div>
        {/* 상단 정보(카테고리, 작성일) */}
        <section className="max-w-screen-lg flex justify-between mb-4">
          <div className="text-sm text-b-text-darkgray ml-4">
            빌리기 {'>'} 생활용품
          </div>
          <div className="text-xs text-b-text-darkgray mr-4">
            (작성일) 2022.12.16
          </div>
        </section>

        {/* 게시글 header - 기본 정보들 */}
        <section className="flex justify-between mb-4">
          <div>
            <img
              src="#"
              className="w-[410px] h-[410px] border border-solid border-gray-300 rounded-lg"
              alt="원하는 제품 사진"
            />
          </div>

          {/* 상품 기본정보 */}
          <div className="flex flex-col justify-between w-[350px] h-[410px] pt-3 mr-4">
            <div className="text-right">
              <div className="text-3xl">갤럭시 S2 공기계</div>
              <div className="text-sm mt-1">해시태그</div>
            </div>

            <div className="text-right">
              <div className="flex justify-between mb-2">
                <div className="text-sm text-b-text-darkgray w-24 mb-2 text-left">
                  요금
                </div>
                <div>
                  <div className="mb-2">1,000원/시간</div>
                  <div>5,000원/일</div>
                </div>
              </div>
              <hr className="hr-1 my-4"></hr>
              <div className="flex justify-between mb-2">
                <div className="text-sm text-b-text-darkgray w-24 mb-2 text-left">
                  원하는 대여시간
                </div>

                <div>
                  <div>2022-12-20 ~ 2022-12-30</div>
                </div>
              </div>

              {/* 사용자 정보 */}
              <div className="flex flex-row gap-2 items-end mt-6">
                <div className="w-1/2 p-2 text-left bg-white border border-solid border-gray-300 rounded-lg">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                      alt="사용자 이미지"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium text-gray-900 mb-1">
                        닉네임
                      </p>
                      <p className="text-[8px] font-medium text-gray-400 ">
                        서울시 엘리스구
                      </p>
                    </div>
                  </div>
                </div>

                {/* 채팅버튼 */}
                <button className="w-1/2 h-[50px] focus:outline-none bg-b-bg-gray hover:bg-b-yellow hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300">
                  채팅하기
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 게시글 main - 상세 정보들 */}
        <br />
        <section>
          <div>상세정보</div>
          <div className="w-full h-40 mt-3 p-3 rounded-lg">
            갤럭시 S2 공기계 빌리고 싶어요.....
          </div>
          <br />
          <br />
          <br />
          <div>위치</div>
          <div className="w-full h-96 mt-3 rounded-lg ">지도 나타나는 곳</div>
          <br />
          <br />
          <br />
          <Caution />
        </section>

        {/* 게시글 footer - 목록/수정/삭제 button */}
        <section className="flex justify-between my-5">
          <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1.5   transition duration-100">
            목록
          </button>
          <div>
            <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 mr-1  transition duration-100">
              수정
            </button>
            <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1.5   transition duration-100">
              삭제
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
