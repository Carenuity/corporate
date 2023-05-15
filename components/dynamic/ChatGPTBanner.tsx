const ChatGPTBanner = () => {
  return (
    <div
      className='background-no-repeat position-absolute h-100 w-100 bg-img d-none d-lg-block wow fadeIn'
      data-wow-delay='200ms'
      data-background='/img/bg/chatgpt.webp'
      style={{
        backgroundImage: 'url(/img/bg/chatgpt.webp)',
      }}
    ></div>
  );
};

export default ChatGPTBanner;
