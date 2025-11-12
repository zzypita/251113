# SCORM Quiz Package

This SCORM quiz package is designed to be integrated into the Moodle platform, allowing for tracking of quiz attempts and scores. Below is an overview of the files included in this package and their purposes.

## Files Included

- **imsmanifest.xml**: This file defines the metadata for the SCORM package. It includes information about the course, such as the title, version, and organization, as well as the resources and the structure of the course content.

- **scorm_api_wrapper.js**: This JavaScript file provides the necessary functions to interact with the SCORM API. It handles communication between the quiz and the Moodle platform, including initializing the SCORM session, tracking quiz attempts, and recording scores.

- **測驗Quiz.html**: This file contains the HTML for the quiz. It includes the quiz interface and logic to capture user responses and interact with the SCORM API to send results.

- **assets/style.css**: This file contains the CSS styles for the quiz, ensuring that the quiz is visually appealing and user-friendly.

## Installation Instructions

1. Download the SCORM package files.
2. Upload the entire `scorm-quiz-package` folder to your Moodle course.
3. In Moodle, add a new SCORM activity and select the uploaded package.
4. Configure the SCORM settings as needed (e.g., grading, attempts).
5. Save and display the SCORM activity to start using the quiz.

## Usage Instructions

- Once the SCORM activity is launched, users will be able to take the quiz.
- The quiz will automatically track attempts and scores through the SCORM API.
- Upon completion, results will be sent back to the Moodle platform for grading and record-keeping.

## Support

For any issues or questions regarding the SCORM package, please contact the course administrator or refer to the Moodle documentation for SCORM integration.