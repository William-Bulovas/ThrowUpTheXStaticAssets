import React from 'react';
import GitHubButton from 'react-github-btn';

export const About = () => {

    return (
        <div className="container mt-3">
            <h3>About the site</h3>

            <div className="row mt-5 mx-5">
                <p>
                    After coming in second for 3rd place straight years, I wanted to be able to see my potential dynasty. Having no other
                    option I created my own site. 
                    
                    <div className="my-1"/>
                    <hr/>
                    <div className="my-1"/>

                    This is a static website hosted with S3 and AWS Cloudfront. The data is stored on DynamoDB and is accessible through
                    a REST API hosted with API Gateway and AWS Lambda.
                </p>
            </div>

            <div className="row mt-3">
                <div className="mr-2">
                    <GitHubButton href="https://github.com/William-Bulovas/ThrowUpTheXStaticAssets">Front Code</GitHubButton>
                </div>
                

                <div>
                    <GitHubButton href="https://github.com/William-Bulovas/ThrowUpTheXBackend">Backend Code</GitHubButton>
                </div>
            </div>
        </div>
    )
}