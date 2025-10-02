import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-9/12 mx-auto my-12 px-4">
      <div>
        <article className="bg-base-100 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          {/* Image */}
          <div className="h-48 md:h-56 w-full overflow-hidden">
            <img
              src="https://cff2.earth.com/uploads/2023/06/16080040/sea-turtle_3medium-1400x850.jpg"
              alt="turtle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="p-6">
            {/* category */}
            <div className="text-xs  tracking-wider mb-4 flex justify-center items-center">
              <span className="mx-3">—</span>
              <span className="uppercase">Sea</span>
              <span className="mx-3">—</span>
            </div>

            {/* title */}
            <h3 className="text-lg md:text-xl  font-semibold  leading-tight mb-5">
              Kuakata sea beach in Bangladesh is the only sea beach in the
              country
            </h3>

            <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8agabWexgmitowZtxXje8i18wRXkDinlQw&s"
                  alt="{item.author}"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">Mehedi</span>
              </div>

              <div className="text-sm text-gray-400">May,27,2024</div>
            </div>
          </div>
        </article>
      </div>

      <div>
        <article className="bg-base-100 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          {/* Image */}
          <div className="h-48 md:h-56 w-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFklMDapEKjfOvf_Nh_GR6N6Il1l-uZ7o8X-AlM0r4__7Ul371v2ziZ8xsSzj-_pzSTU&usqp=CAU"
              alt="turtle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="p-6">
            {/* category */}
            <div className="text-xs  tracking-wider mb-4 flex justify-center items-center">
              <span className="mx-3">—</span>
              <span className="uppercase">Sea</span>
              <span className="mx-3">—</span>
            </div>

            {/* title */}
            <h3 className="text-lg md:text-xl font-semibold  leading-tight mb-5">
              Great mountain ranges in the world you must visit once in a
              lifetime
            </h3>

            <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8agabWexgmitowZtxXje8i18wRXkDinlQw&s"
                  alt="{item.author}"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">Mehedi</span>
              </div>

              <div className="text-sm text-gray-400">May,27,2024</div>
            </div>
          </div>
        </article>
      </div>

      <div>
        <article className="bg-base-100 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          {/* Image */}
          <div className="h-48 md:h-56 w-full overflow-hidden">
            <img
              src="https://cdn.thecollector.com/wp-content/uploads/2023/11/tallest-mountains-in-the-world.jpg"
              alt="turtle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="p-6">
            {/* category */}
            <div className="text-xs   tracking-wider mb-4 flex justify-center items-center">
              <span className="mx-3">—</span>
              <span className="uppercase">Sea</span>
              <span className="mx-3">—</span>
            </div>

            {/* title */}
            <h3 className="text-lg md:text-xl font-semibold  leading-tight mb-5">
              Kakashi Hatakhe is the best character in the Naruto series
            </h3>

            <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8agabWexgmitowZtxXje8i18wRXkDinlQw&s"
                  alt="{item.author}"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">Mehedi</span>
              </div>

              <div className="text-sm text-gray-400">May,27,2024</div>
            </div>
          </div>
        </article>
      </div>

      
    </div>
  );
};

export default Home;
