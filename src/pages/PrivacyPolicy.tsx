import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#9b87f5] hover:text-[#8B5CF6] mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-8">VPN Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Updated at 2024-02-09</p>
            
            <p className="mt-4">
              NomadNet is committed to providing a secure and private experience for our users. This VPN
              Policy outlines how our application uses VPN services, the data we handle, and how we ensure
              compliance with applicable policies and regulations.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Purpose of VPN Service Usage</h2>
            <p>Our application uses VPN services to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Enhance user privacy and security while browsing the internet.</li>
              <li>Protect data from unauthorized access on public or unsecured networks.</li>
              <li>Provide content filtering, parental controls, or restricted network access as needed.</li>
            </ul>
            <p className="mt-4">
              The VPN functionality is designed solely for these purposes, and we do not use it for any
              unauthorized activities, such as manipulating user traffic, injecting ads, or collecting data without
              consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection and Usage</h2>
            <p>When you use the VPN service, we may collect minimal data necessary to provide the service,
              including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Connection metadata (e.g., time of connection, bandwidth usage) for troubleshooting and
                improving service quality.</li>
              <li>Device information (e.g., operating system, app version) for app performance optimization.</li>
            </ul>
            <p className="mt-4">
              We do not collect or log user activity or traffic data transmitted through the VPN. Any data
              collected is handled in compliance with our Privacy Policy and applicable laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">User Control and Transparency</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Consent:</strong> Users must explicitly enable the VPN feature within the app.</li>
              <li><strong>Disabling VPN:</strong> Users can disable the VPN at any time through the app's settings.</li>
              <li><strong>Access to Data:</strong> Users can request access, modification, or deletion of any data associated with
                their account by contacting us at support@nomadnet.mn.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services to support our VPN functionality. Any third-party service
              providers we work with are bound by strict data privacy agreements to ensure the protection of
              user data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance</h2>
            <p>We adhere to all applicable Google Play policies, including the VPNService policy. Our app
              does not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Redirect or manipulate user traffic for purposes outside the stated functionality.</li>
              <li>Inject advertisements into user traffic or monetize user data through the VPN connection.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about our VPN Policy, please contact us at support@nomadnet.mn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;