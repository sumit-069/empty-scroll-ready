import { FeedbackForm } from '@/components/FeedbackForm';

const Feedback = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Share Your Feedback</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your feedback helps us improve our healthcare services and create better experiences for all patients.
          </p>
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Feedback;