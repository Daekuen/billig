import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Caution from './../components/postDetail/Caution';
import { PostDataType } from '../store/PostReadStore';
// import TradeWayTag from '../components/tag/TradeWayTag';
import { FaPeopleArrows } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';

export default function LendPostDetail() {
  // 서버에서 get 하는 data state
  const [lendData, setLendData] = useState<PostDataType>();

  // url id 받기
  const { id } = useParams();

  useQuery(
    ['lendPostData'],
    () =>
      axios.get(
        `https://port-0-village-dpuqy925lbn63gyo.gksl2.cloudtype.app/product/${id}`,
      ),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 60, // 1시간
      onSuccess: (res) => setLendData(res?.data[0]),
      onError: () => console.log('error'),
    },
  );

  // 서브 사진 클릭하면 메인으로 올리기
  const [mainImgUrl, setMainImgUrl] = useState('');

  function changeMainImg(e: React.MouseEvent<HTMLImageElement>) {
    setMainImgUrl(e.currentTarget.src);
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="w-[800px] flex flex-col justify-center mx-auto text-b-text-black">
        <Nav />
        <div className="mb-6 text-3xl">빌려주기</div>
        {/* 상단 정보(카테고리, 작성일) */}
        <section className="max-w-screen-lg flex justify-between mb-4">
          <div className="text-sm text-b-text-darkgray ml-4">
            빌려주기 {'>'} {lendData?.category.name}
          </div>
          <div className="text-xs text-b-text-darkgray mr-4">
            (작성일) 2022.12.16
          </div>
        </section>

        {/* 게시글 header - 기본 정보들 */}
        <section className="flex justify-between mb-4 ">
          <div>
            <img
              src={mainImgUrl === '' ? lendData?.imgUrl[0] : mainImgUrl}
              className="w-[380px] h-[380px]"
              alt="메인 사진"
            />
            <div className="flex justify-center gap-1">
              {lendData?.imgUrl.map((url, idx) => (
                <img
                  onMouseOver={changeMainImg}
                  key={idx}
                  src={url}
                  className="w-16 h-16 mt-2 border border-solid border-gray-300"
                  alt="원하는 제품 사진"
                />
              ))}
            </div>
          </div>

          {/* 상품 기본정보 */}
          <div className="flex flex-col justify-between w-[350px] h-[410px] pt-3 mr-4">
            <div className="text-right">
              <div className="text-3xl">{lendData?.title}</div>
              <div className="flex justify-end">
                {lendData?.hashtag.map((tag, idx) => {
                  return (
                    <div
                      key={idx}
                      className="text-[10px] mt-2 mr-1 p-1.5 bg-gray-200 rounded-lg"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-right">
              <div className="flex justify-between mb-2">
                <div className="text-sm text-b-text-darkgray w-24 mb-2 text-left">
                  요금
                </div>
                <div>
                  <div className="mb-2">{lendData?.price.priceTime}원/시간</div>
                  <div>{lendData?.price.priceDay}/일</div>
                </div>
              </div>

              {/* 대여방법 */}
              <div className="flex justify-between mb-2">
                <div className="text-sm text-b-text-darkgray w-24 mb-2 text-left my-auto">
                  대여방법
                </div>
                <div>
                  {/* <TradeWayTag tradeWay={borrowData?.tradeWay} /> */}
                  <div
                    className={`${
                      lendData?.tradeWay.direct ? 'bg-b-tag-dir' : ''
                    } item_tag inline-flex text-b-hash-text p-[5px] rounded-lg font-extrabold my-auto mr-2`}
                  >
                    {lendData?.tradeWay.direct ? (
                      <FaPeopleArrows className="mr-1 text-sm" />
                    ) : (
                      ''
                    )}

                    <span className="text-xs">
                      {lendData?.tradeWay.direct ? '직거래' : ''}
                    </span>
                  </div>
                  <div
                    className={`${
                      lendData?.tradeWay.delivery ? 'bg-b-tag-pack' : ''
                    } item_tag inline-flex text-b-hash-text p-[5px] rounded-lg font-extrabold my-auto`}
                  >
                    {lendData?.tradeWay.delivery ? (
                      <GoPackage className="mr-1 text-sm" />
                    ) : (
                      ''
                    )}

                    <span className="text-xs">
                      {lendData?.tradeWay.delivery ? '택배거래' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* 사용자 정보 */}
              <div className="flex flex-row gap-2 items-end mt-6">
                <div className="w-1/2 p-2 text-left bg-white border border-solid border-gray-300 rounded-lg">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 mr-2 rounded-full"
                      src={lendData?.lender.image}
                      alt="사용자 이미지"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium text-gray-900 mb-1">
                        {lendData?.lender.nickName}
                      </p>
                      <p className="text-[8px] font-medium text-gray-400 ">
                        {lendData?.lender.address1}
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
            {lendData?.description}
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
        <Footer />
      </div>
    </div>
  );
}