import PostStore from './../../store/PostStore';

export default function HashTagSection() {
  // store에서 불러오기
  const {
    hashTagInputText,
    hashTags,
    setHashTag,
    setHashTagInputText,
    deleteHashTags,
  } = PostStore();

  // input에 태그 입력 시 tages 배열로 저장
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const tagInput = e.target.value;
    setHashTagInputText(tagInput);
  }

  function handleTagSpaceBar(e: React.KeyboardEvent<HTMLInputElement>) {
    // 스페이스로 해시태그 등록 시 input이 초기화가 되지 않고 스페이스가 남는 이슈 있음
    if (e.key === ' ') {
      setHashTagInputText('');
      setHashTag(hashTagInputText);
    }
  }

  // 해시태그 클릭 시 삭제
  function deleteHashTag(e: React.MouseEvent<HTMLDivElement>) {
    const newTages = hashTags.filter(
      (tag) => tag !== e.currentTarget.innerText,
    );
    deleteHashTags(newTages);
  }

  // 해시태그 갯수 제한 필요, 해시태그 중복 등록 막아야 함
  return (
    <section className="flex flex-col mb-4 h-[70px]">
      <div className="flex flex-row">
        <span className="w-[100px] h-10 p-3 text-center">해시태그</span>
        <div className="">
          <div>
            <input
              value={hashTagInputText}
              onChange={handleTextChange}
              onKeyDown={handleTagSpaceBar}
              type="text"
              placeholder="태그를 입력해주세요"
              className="p-3 mr-4 w-40 h-10 border-solid border border-gray-300 rounded-md outline-none focus:border-b-yellow focus:border-2 transition duration-100"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          {hashTags.map((tag) => (
            <div
              onClick={deleteHashTag}
              key={tag}
              className="bg-b-yellow hover:bg-gray-200 text-white h-9 mr-2 py-2 px-4 rounded-full cursor-pointer transition duration-75"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-1 ml-24 text-[6px] text-b-text-darkgray leading-4">
        <p>스페이스바를 입력하면 태그를 등록 할 수 있습니다.</p>
        <p>등록된 태그를 클릭하면 삭제됩니다.</p>
      </div>
    </section>
  );
}
