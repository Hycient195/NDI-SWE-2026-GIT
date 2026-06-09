>> 1. Ensure to set request timeouts, as fetch requests have not timeout limits.

>> 2. Always ensure to set correct headers for your requests

>> 3. Always to stringify your response body

>> 4. Always remember to specify your HTTP Verb (eg: POST, DELETE, PATCH, PUT, HEAD etc)

>> 5. Ensure to build a reusable wrapper function for making your API calls, that would include all of the above.

>> 6. Always prefer async/await over .then() and .catch()

>> 7. Ensure not to stringify FormData payloads

>> You can read up the legacy XMLHTTPRequest that was used before fetch() became predominant

>> Read Up about "axios" for making HTTP requests