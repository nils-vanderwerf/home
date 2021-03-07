# my-personal-website
* Index.html
    Head Section
    -Links - Google Fonts
             Main Stylesheet
    
    Body
        Section 1 
        wrapped in content div so max-width of 1200px is set
           - navigation bar
                Links to different sections in one-page website
                    - Home
                    - About Me
                    - My Work 
                    - Technical Skills
                    - Contact Me 
            -Logo section
               - Logo image - stacked name
               -Container indicating that I'm a graphic designer
        
        Section 2    
            Header 1 - About Me
            My bio
            -Outer container to have a light grey background, profile pic (in circle shape using border-radius: 50%)
            Text centered - max width 900px

            Bit of a bio about myself

        Section 3
            Links to different pieces of work

            Clickable links which toggle the active category.
            1. Add an event listener to each of the links
            2. Remove the active categories on all clickable links for section changes
            3. Hide all sections
            4. Initialize variable holding divs to show in the following switch statement, using a 'for' loop
            5. Intiallize outside switch so it's available in every case
            6. Use the ID of the clicked element as the switch identifier
            7. Get all elements with the associated CLASS e.g branding
            8. Make divs with this class visible
            9. Chanfge the status of the clicked element to active


        Section 4 
            Add technical capabilities as an unordered list in 3 columns
            -Change to 2 columns under 768px, and 1 column under 600px

        Section 5
            -Contact details opening in a new tab
            -Email, Linked in, Github

        Footer with contact details

        /* style.css
            - body font -  Noto Sans JP (Helvetica arial, sans-serif as backup);
            - outer countainer to span 100% of window - 
            -content - max-width 1200px;
            - "active" class to house active element styling
            -Try to define widths in rems and % so its responsive
            -clearfix forces container to take up height of the container
