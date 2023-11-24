import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Display a toast notification when the component is mounted
    toast.info('Welcome to Task Sechudler!', {
      position: 'top-right',
      autoClose: 1500, // 7 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);
  return (

    <div>
      <section class="bg-main bg-color hero-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-right">
              <h1 class="text-uppercase fw-bolder text-white">Task Scheduler</h1>
              <p class=" fw-bolder text-white">Your Personal Productivity Assistant</p>
              <p class="mt-3 mb-3 para-width text-light-grey">
                "Task Sechudler is your go-to web app for managing your daily tasks and boosting your productivity. Designed with simplicity and efficiency in mind, Task Tracker empowers you to organize your tasks, set priorities, and achieve your goals with ease."
              </p>
              <div class="text-center w-100 text-md-start">
                <button class="text-uppercase btn btn-primary px-5 py-3" data-bs-toggle="tooltip"l̥
                  title="Make Todo-List" onClick={() => navigate('/Todo')}>Todo</button>
              </div>
            </div>

            <div class="col-12 col-md-12 col-lg-6">
              <div class="text-center text-lg-end">
                <video src="./images/coding_guy.mp4" loop muted autoPlay class="hero--video--section"></video>
              </div>
            </div>
          </div>
          
          {/* <div class="custom-shape-divider-bottom-1700028699">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
                    </div>           */}
        </div>
      </section>


    </div>

  );
};

export default Home;
