import { Project } from '../types';

const asset = (filePath: string) => {
  const clean = filePath.startsWith('/') ? filePath.slice(1) : filePath;
  return `./${clean}`;
};

export const PROJECTS: Project[] = [
  {
    id: 'satellite-attitude-control',
    title: 'Satellite Attitude Control using Reaction Wheels',
    shortSubtitle: 'Spacecraft Dynamics & Three-Axis PID Stabilization',
    category: 'space-robotics',
    categoryLabel: 'Space & Robotics',
    status: 'Research',
    year: '2024',
    summary:
      'A high-fidelity physics simulation of satellite attitude control utilizing three-axis reaction wheels governed by PID torque management.',
    fullDescription: [
      'This research project models and simulates a three-axis stabilized spacecraft equipped with internal reaction wheels, which precisely orient the satellite in microgravity without expending chemical propellant.',
      'The control algorithm employs a tuned Proportional-Integral-Derivative (PID) controller to modulate motor torques dynamically, compensating for angular perturbations and commanding rapid pointing maneuvers.',
      'Includes rotational equations of motion, moment of inertia calculations, quaternion kinematics, and a dynamic 3D simulation showing real-time coordinate transformations with axis markers.'
    ],
    mediaType: 'video',
    mediaSrc: asset('videos/SatelliteRotationWithLabels.mp4'),
    tags: ['Python', 'PID Control', 'Spacecraft Dynamics', 'Reaction Wheels', 'Simulation'],
    features: [
      'Three-axis attitude stabilization simulation using internal momentum exchange',
      'Dynamic PID torque controller compensating for external perturbation torques',
      'Quaternion-based rotational kinematics and numerical integration',
      'Vector trajectory rendering illustrating spacecraft coordinate frames'
    ],
    technologies: [
      { group: 'Dynamics & Control', items: 'PID Controller, Quaternion Kinematics, Euler Angle Transformations' },
      { group: 'Simulation Engine', items: 'Python, NumPy, SciPy, Matplotlib 3D' },
      { group: 'Domain', items: 'Space Situational Awareness, Spacecraft Guidance & Navigation (GNC)' }
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Lobster1911/Satellite-Attitude-Control-Using-Reaction-Wheels',
        type: 'github'
      }
    ]
  },
  {
    id: 'satellite-tracking-earth-eye',
    title: 'Satellite Tracking & Orbit Trajectory Prediction',
    shortSubtitle: 'Real-Time Space Situational Awareness & ML Orbit Forecasting',
    category: 'space-robotics',
    categoryLabel: 'Space & Robotics',
    status: 'Completed',
    year: '2024',
    summary:
      'Real-time orbital tracking and trajectory forecasting platform integrating NORAD Two-Line Element (TLE) data with an experimental LSTM deep learning model and 3D globe visualization.',
    fullDescription: [
      'Earth-Eye is an interactive Space Situational Awareness (SSA) platform engineered to monitor, propagate, and predict orbital paths for thousands of active satellites in Low, Medium, and Geostationary Earth Orbits.',
      'The system combines classical SGP4/SDP4 orbital perturbation models with an experimental Long Short-Term Memory (LSTM) recurrent neural network to discover subtle orbital decay patterns.',
      'Provides an interactive Three.js 3D globe environment, live ephemeris feeds via CelesTrak, and a rocket launch trajectory simulation utility accounting for atmospheric parameters.'
    ],
    mediaType: 'image',
    mediaSrc: asset('images/Earth_Eye.png'),
    secondaryMediaSrc: asset('images/3D Globe.png'),
    tags: ['React', 'Three.js', 'LSTM Neural Network', 'Satellite.js', 'TLE Data', 'Flask'],
    features: [
      'Real-time orbital tracking for LEO, MEO, and GEO satellites',
      'Hybrid orbital propagation comparing classical SGP4 models with LSTM predictions',
      '3D interactive Earth globe visualization with orbit cones and ground tracks',
      'Rocket launch trajectory simulation factoring atmospheric density and variable thrust',
      'Integration with live CelesTrak ephemeris APIs'
    ],
    technologies: [
      { group: 'Frontend', items: 'React, Three.js, React-Three-Fiber, Vite' },
      { group: 'Backend & ML', items: 'Python Flask, TensorFlow (LSTM Model), NumPy' },
      { group: 'Astrodynamics', items: 'Satellite.js, SGP4/SDP4 Propagators, TLE parsing' },
      { group: 'Data Sources', items: 'CelesTrak API, OpenWeatherMap API' }
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Lobster1911/Earth-Eye',
        type: 'github'
      },
      {
        label: 'Research Paper',
        url: 'https://www.academia.edu/124020098/Satellite_Tracking_and_Trajectory_Prediction_Application',
        type: 'paper'
      }
    ]
  },
  {
    id: 'rock-classification',
    title: 'Embedded Rock Identification with Edge AI',
    shortSubtitle: 'Edge Computer Vision & Geological Classification on Raspberry Pi 4B',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning',
    status: 'Completed',
    year: '2023',
    summary:
      'Autonomous edge machine learning system deployed on a Raspberry Pi 4B capable of classifying 35+ rock and mineral types in real time with high accuracy.',
    fullDescription: [
      'Developed as an automated geological classification tool for field work, educational robotics, and mineral identification without relying on cloud connectivity.',
      'The pipeline incorporates custom Convolutional Neural Network (CNN) architectures and a fine-tuned ResNet-50 backbone, quantized into TensorFlow Lite format to achieve low-latency inference on ARM edge devices.',
      'Features a custom web-scraped and verified dataset spanning 35 geological classes with data augmentation (rotations, brightness, texture shifts) and live video inferencing via a USB webcam.'
    ],
    mediaType: 'image',
    mediaSrc: asset('images/Rock_Classification.jpg'),
    tags: ['Raspberry Pi', 'TensorFlow Lite', 'Edge AI', 'ResNet', 'Computer Vision', 'Python'],
    features: [
      'Real-time automated edge classification of 35+ rock varieties',
      'Optimized TensorFlow Lite model conversion for ARM Cortex-A72 CPU',
      'Curated geological dataset with synthetic augmentation',
      'Integrated live video stream processing pipeline with real-time confidence scores'
    ],
    technologies: [
      { group: 'Hardware Platform', items: 'Raspberry Pi 4B (4GB), Logitech C270 HD Webcam' },
      { group: 'Model Architecture', items: 'Custom CNN, Pre-trained ResNet-50 (Transfer Learning)' },
      { group: 'Deployment Frameworks', items: 'TensorFlow, TensorFlow Lite (TFLite), OpenCV, Python' }
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Lobster1911/Rock-Identification',
        type: 'github'
      }
    ]
  },
  {
    id: 'street-view-gender-classification',
    title: 'Pose-Based Anonymized Demographic Analysis',
    shortSubtitle: 'Pose Keypoint Extraction from Google Street View Imagery',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning',
    status: 'Research',
    year: '2023',
    summary:
      'Computer vision research exploring gender classification using skeletal pose keypoints on privacy-preserved Google Street View scenes with blurred faces.',
    fullDescription: [
      'This research addresses demographic and pedestrian analysis in public datasets where facial information is deliberately blurred for strict privacy compliance.',
      'Rather than relying on facial features, the model extracts topological skeletal keypoints (joints, shoulder-to-hip ratios, gait indicators) using human pose estimation models.',
      'Includes an automated panoramic tile downloader and parser that processes street view IDs across diverse metropolitan areas.'
    ],
    mediaType: 'image',
    mediaSrc: asset('images/GSV.png'),
    tags: ['Python', 'OpenCV', 'Pose Estimation', 'Keypoint Extraction', 'Street View API'],
    features: [
      'Face-blur-invariant recognition using skeletal topological keypoints',
      'Automated extraction of high-resolution spherical street panoramas via Google Street View API',
      'Feature engineering focusing on anatomical ratios rather than identity markers',
      'Ethical and privacy-preserving computer vision methodology'
    ],
    technologies: [
      { group: 'Vision & Deep Learning', items: 'OpenCV, PyTorch, MediaPipe Pose Estimation' },
      { group: 'Data Ingestion', items: 'Google Street View API, Python Requests, Pillow' }
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Lobster1911/Generate-Pano-ID-Google-Street-View-',
        type: 'github'
      }
    ]
  },
  {
    id: 'note-taking-application',
    title: 'Full-Stack Distributed Note Management',
    shortSubtitle: 'Angular & Flask Micro-Service Architecture',
    category: 'software',
    categoryLabel: 'Software Engineering',
    status: 'Completed',
    year: '2023',
    summary:
      'Responsive full-stack CRUD application engineered with an Angular SPA interface, RESTful Flask backend, and MongoDB document persistence.',
    fullDescription: [
      'Built as university coursework demonstrating production software engineering practices, decoupled service architectures, and REST principles.',
      'Provides instant note authoring, category filtering, search, and dynamic state synchronization between client and server with transactional MongoDB operations.',
      'Designed with modular component boundaries and SCSS utility architecture.'
    ],
    mediaType: 'image',
    mediaSrc: asset('images/note.png'),
    tags: ['Angular', 'Python Flask', 'MongoDB', 'REST API', 'SCSS'],
    features: [
      'Full CRUD capability (Create, Read, Update, Delete) with validation',
      'Modular Angular frontend architecture with reactive forms',
      'REST API server implementation in Python Flask',
      'NoSQL document persistence using MongoDB'
    ],
    technologies: [
      { group: 'Frontend', items: 'Angular, TypeScript, SCSS' },
      { group: 'Backend', items: 'Python Flask, PyMongo, REST Endpoints' },
      { group: 'Database', items: 'MongoDB NoSQL Document Store' }
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Lobster1911/Notes-Taking-Application',
        type: 'github'
      }
    ]
  }
];

export const SKILL_GROUPS = [
  {
    title: 'Robotics & Control Systems',
    skills: [
      'Attitude Determination & Control (ADCS)',
      'PID Torque Control',
      'Spacecraft Orbital Mechanics',
      'Quaternion Kinematics',
      'Reaction Wheel Dynamics',
      'Embedded Sensors & Actuators'
    ]
  },
  {
    title: 'Machine Learning & Vision',
    skills: [
      'TensorFlow & PyTorch',
      'TensorFlow Lite (Edge ML)',
      'Convolutional Neural Networks (CNN)',
      'LSTM Recurrent Neural Networks',
      'Pose Estimation & Keypoints',
      'OpenCV Image Processing'
    ]
  },
  {
    title: 'Software & Embedded Systems',
    skills: [
      'Python',
      'C / Embedded C',
      'Raspberry Pi 4B',
      'React & TypeScript',
      'Three.js (3D Visualization)',
      'Linux / Unix Systems',
      'Git & Version Control'
    ]
  }
];

export const PUBLICATIONS_AND_WRITING = [
  {
    title: 'Satellite Tracking and Trajectory Prediction Application',
    venue: 'Academia.edu Research Publication',
    year: '2024',
    description:
      'Comprehensive research report detailing the architectural synthesis of classical SGP4 orbital propagators with LSTM deep neural network forecasting for space situational awareness.',
    link: 'https://www.academia.edu/124020098/Satellite_Tracking_and_Trajectory_Prediction_Application'
  },
  {
    title: 'Imperial College Student Research Blogs',
    venue: 'Imperial College London',
    year: 'Active',
    description:
      'Reflections and technical dispatches exploring robotics, artificial intelligence frontiers, and academic research experiments.',
    link: 'https://blogs.imperial.ac.uk/parikshit/'
  }
];
