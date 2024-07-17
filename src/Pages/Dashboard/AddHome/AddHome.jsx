import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../assets/hooks/useAxiosSecure";

// Get the image hosting token from environment variables
const imageHostingToken = import.meta.env.VITE_Image_Upload_Token;
const AddHome = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm(); // Form handling with react-hook-form

  console.log(imageHostingToken);
  // Image hosting URL using the token
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
  const onSubmit = (data) => {
    const formData = new FormData();

    // todo multiple image
    for (const image of data.image) {
      formData.append("image", image);
      console.log(image);
    }

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (Array.isArray(imgResponse.data)) {
          const imgURLs = imgResponse.data.images.map(
            (image) => image.display_url
          );
          // Extract data from form submission
          const {
            name,
            price,
            category,
            city,
            address,
            bedrooms,
            bathrooms,
            guests,
            other,
            featured,
            comfort,
            trending,
          } = data;

          // Create new home object
          const newHome = {
            name,
            price: parseFloat(price),
            category,
            city,
            address,
            bedrooms,
            bathrooms,
            guests,
            other,
            featured,
            comfort,
            trending,
            image: imgURLs,
          };
          console.log(newHome);
          axiosSecure.post("/home", newHome).then((data) => {
            console.log("after posting new home item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Home added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <h2 className="bg-white p-8 "></h2>
      <div className="text-center">
        <h2 className="text-2xl font-semibold ">Whats New!</h2>
        <h2>-------------------------------------------------</h2>
        <h2 className="text-3xl font-bold uppercase">Add An Home</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" ms-8  md:grid grid-cols-3 gap-2  lg:grid-cols-4 mt-8"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Home name?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Pick one</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Cabin</option>
              <option>Farmhouse</option>
              <option>Chalet</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price?*</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              {...register("price", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">City?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("city", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Address?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("address", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Guests?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("guests", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Bathrooms?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("bathroom", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Bedrooms?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("bedroom", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Other?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("other", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Trending?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("trending", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Featured?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("featured", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text"> Comfort?*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("comfort", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Home Image*</span>
            </div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
              multiple // Enable multiple file selection
            />
          </label>
          <input
            className="btn btn-error mt-8 "
            type="submit"
            value="Add Home"
          />
        </form>
      </div>
    </div>
  );
};

export default AddHome;
