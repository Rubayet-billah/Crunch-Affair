import { Star } from "lucide-react";
import React from "react";
import star from "@/assets/icons/star.png";
import CAImage from "@/components/UI/CAImage";

const TestimonialCard = () => {
  return (
    <div className="p-6 border-2 border-black">
      <div className="flex justify-between gap-4">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full bg-slate-200"></div>
          <div>
            <p className="font-bold">Emily Johnson, Home Chef</p>
            <small className="text-sm">Reviewed on June 25, 2024</small>
            <div className="flex items-center gap-1">
              <CAImage src={star} alt="star icon" className="max-w-4" />
              <CAImage src={star} alt="star icon" className="max-w-4" />
              <CAImage src={star} alt="star icon" className="max-w-4" />
              <CAImage src={star} alt="star icon" className="max-w-4" />
            </div>
          </div>
        </div>
        <div className="w-20 h-20 bg-gray-300 rounded"></div>
      </div>
      <div className="mt-3 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero, sit
        iste incidunt fugit amet itaque blanditiis, animi.
      </div>
    </div>
  );
};

export default TestimonialCard;
