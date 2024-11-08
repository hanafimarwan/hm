import axios from "axios";


export const handleSubmit = async (event: React.FormEvent,recipient:string,subject:string,message:string):Promise<string> => {
    event.preventDefault(); // Prevent default form submission behavior
    
    try {
        // Send a POST request to the backend to send the email
        const response = await axios.post('https://server-ipa-rnu2.onrender.com/api.email', {
            recipient,
            subject,
            text: message,
        });

        // Set the response message to display
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error);
        return 'Failed to send email';
    }
};
