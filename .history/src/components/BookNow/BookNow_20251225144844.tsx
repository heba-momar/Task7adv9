import BookingForm from "./BookingForm"


const BookNow = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300 mt-[120px] px-[2.1025641%]
     lg:px-[5.55555556%] xl:px-[13.0208333%] relative">
     <div className="max-w-[1300px] mx-auto">
    <div className="flex flex-col-reverse py-[60px] lg:flex-row gap-10 h-full relative">
      <BookingForm />
          <div className="lg:absolute  lg:top-0 lg:right-0  w-1/2 lg:w-[624px] z-10 mx-auto lg:mx-0">
     <img  src="/images/booking/bike.png" alt="bike" className="scale-x-[-1] lg:pt-[170px] right-[3rem] object-contain" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BookNow
