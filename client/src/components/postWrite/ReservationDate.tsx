import { ChangeEvent, useRef } from 'react';
import { reservationStore } from './../../store/PostWriteStore';

export default function ReservationDate() {
  const { reservationDate, setReservationDate } = reservationStore();

  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  // 오늘부터 선택 가능
  const today = new Date()
    .toLocaleDateString()
    .replace(/\./g, '')
    .replace(/\s/g, '-');

  // end가 start보다 빠를 때 유효성검사 진행해야 함(구현완료)
  function setDate(e: ChangeEvent<HTMLInputElement>) {
    setReservationDate(startRef.current?.value, endRef.current?.value);
  }

  return (
    <section className="mb-4 flex items-center">
      <div className="w-[100px] p-3 text-center">예약기간</div>
      <input
        value={reservationDate.start}
        ref={startRef}
        onChange={setDate}
        type="date"
        min={today}
        max="2099-12-31"
        className="p-3 mx-2 w-[265px] h-10 border-solid border border-gray-300 rounded-md outline-none focus:border-b-yellow focus:border-2 transition duration-100"
      />
      <div className="mx-6">~</div>
      <input
        value={reservationDate.end}
        ref={endRef}
        onChange={setDate}
        type="date"
        min={startRef.current?.value ? startRef.current?.value : today}
        max="2099-12-31"
        className="p-3 mx-2 w-[265px] h-10 border-solid border border-gray-300 rounded-md outline-none focus:border-b-yellow focus:border-2 transition duration-100"
      />
    </section>
  );
}
