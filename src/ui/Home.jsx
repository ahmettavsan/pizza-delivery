function Home() {
  return (
    <div className="my-10 px-4  text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
    </div>
  );
}

export default Home;

//className="my-10  text-center sm:my-16" media-query'e baktığımızda
//sm 640px değerine karşılık gelir default olarak my-10 kullanılırken
//size 640px'den büyük olduğunda my-16 class'ı uygulanacaktır.
//sm:my-16 anlamı ekran size'ı sm'i geçtikten sonra uygulanmaya başlar!!
