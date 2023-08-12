interface ProgressProps {
  width?: string;
}

const Progress: React.FC<ProgressProps> = ({ width }) => {
  return (
    <div className="my-6">
      <div className="flex justify-between mb-1 mt-5">
        <span className="text-base font-medium text-brand">Headline</span>
        <span className="text-sm font-medium text-blue-700 ">45%</span>
      </div>
      <div className="w-full bg-gray-6 rounded-full h-1.5 ">
        <div
          className={`bg-brand h-1.5 rounded-full ${width ? width : 'w-[45%]'}`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
