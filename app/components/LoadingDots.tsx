export const LoadingDots = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2.5 h-2.5  bg-secondary-darker rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0s]" />
        <span className="inline-block w-2.5 h-2.5 bg-secondary-darker rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.12s]" />
        <span className="inline-block w-2.5 h-2.5 bg-secondary-darker rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.24s]" />
      </div>

      <p>Loading books</p>
    </div>
  );
};
