document.addEventListener("DOMContentLoaded", load);

function load(){

    if (document.getElementsByClassName("home")[0] != null)
    {
        document.getElementsByClassName("home")[0].addEventListener('click', function()
        {
            location.href = "home.html";
        })
    }
    
    if (document.getElementsByClassName("submit")[0] != null)
    {
        document.getElementsByClassName("submit")[0].addEventListener('click', function()
        {
            location.href = "submitted.html";
        })
    }

    if (document.getElementsByClassName("submit2")[0] != null)
    {
        document.getElementsByClassName("submit2")[0].addEventListener('click', function()
        {
            location.href = "submittedGeneral.html";
        })
    }
    
    if (document.getElementsByClassName("nologin")[0] != null)
    {
        document.getElementsByClassName("nologin")[0].addEventListener('click', function()
        {
            location.href = "surveyGeneral.html";
        })
    }

    if (document.getElementsByClassName("websurvey")[0] != null)
    {
        document.getElementsByClassName("websurvey")[0].addEventListener('click', function()
        {
            location.href = "barcode.html";
        })
    }
    
    if (document.getElementsByClassName("nextsurvey")[0] != null)
    {
        document.getElementsByClassName("nextsurvey")[0].addEventListener('click', function()
        {
            location.href = "survey2.html";
        })
    }

    if (document.getElementsByClassName("nextsurvey2")[0] != null)
    {
        document.getElementsByClassName("nextsurvey2")[0].addEventListener('click', function()
        {
            location.href = "survey3.html";
        })
    }

    if (document.getElementsByClassName("nextSurveyGeneral")[0] != null)
    {
        document.getElementsByClassName("nextSurveyGeneral")[0].addEventListener('click', function()
        {
            location.href = "surveyGeneral2.html";
        })
    }

    if (document.getElementsByClassName("instructordetail")[0] != null)
    {
        document.getElementsByClassName("instructordetail")[0].addEventListener('click', function()
        {
            location.href = "instructorDetailReport.html";
        })
    }

    if (document.getElementsByClassName("programdetail")[0] != null)
    {
        document.getElementsByClassName("programdetail")[0].addEventListener('click', function()
        {
            location.href = "programDetailReport.html";
        })
    }

    if (document.getElementsByClassName("bi-chevron-double-left")[0] != null)
    {
        document.getElementsByClassName("bi-chevron-double-left")[0].addEventListener('click', function()
        {
            history.back();
        })
    }

    if (document.getElementsByClassName("bi-box-arrow-left")[0] != null)
    {
        document.getElementsByClassName("bi-box-arrow-left")[0].addEventListener('click', function()
        {
            location.href = "index.html";
        })
    }

	if (document.getElementById("loginbutton") != null)
    {
        document.getElementById("loginbutton").addEventListener('click', function()
        {
            location.href = "home.html";
        })
    }

    if (document.getElementById("adminloginbutton") != null)
    {
        document.getElementById("adminloginbutton").addEventListener('click', function()
        {
            location.href = "report.html";
        })
    }

    if (document.getElementsByClassName("activity1")[0] != null)
    {
        document.getElementsByClassName("activity1")[0].addEventListener('click', function()
        {
            location.href = "programEnroll.html";
        })
    }

    if (document.getElementsByClassName("activity2")[0] != null)
    {
        document.getElementsByClassName("activity2")[0].addEventListener('click', function()
        {
            location.href = "record.html";
        })
    }

    if (document.getElementsByClassName("activity3")[0] != null)
    {
        document.getElementsByClassName("activity3")[0].addEventListener('click', function()
        {
            location.href = "record.html";
        })
    }

    if (document.getElementsByClassName("programselect")[0] != null)
    {
        document.getElementsByClassName("programselect")[0].addEventListener('click', function()
        {
            location.href = "programenrollment.html";
        })
    }

    if (document.getElementsByClassName("record1")[0] != null)
    {
        document.getElementsByClassName("record1")[0].addEventListener('click', function()
        {
            location.href = "survey.html";
        })
    }

    if (document.getElementsByClassName("record2")[0] != null)
    {
        document.getElementsByClassName("record2")[0].addEventListener('click', function()
        {
            location.href = "survey.html";
        })
    }

    if (document.getElementsByClassName("record3")[0] != null)
    {
        document.getElementsByClassName("record3")[0].addEventListener('click', function()
        {
            location.href = "survey.html";
        })
    }

    if (document.getElementsByClassName("record4")[0] != null)
    {
        document.getElementsByClassName("record4")[0].addEventListener('click', function()
        {
            location.href = "survey.html";
        })
    }

    if (document.getElementsByClassName("report1")[0] != null)
    {
        document.getElementsByClassName("report1")[0].addEventListener('click', function()
        {
            location.href = "instructors.html";
        })
    }

    if (document.getElementsByClassName("report2")[0] != null)
    {
        document.getElementsByClassName("report2")[0].addEventListener('click', function()
        {
            location.href = "programs.html";
        })
    }

    if (document.getElementsByClassName("instructor")[0] != null)
    {
        document.getElementsByClassName("instructor")[0].addEventListener('click', function()
        {
            location.href = "instructorReport.html";
        })
    }

    if (document.getElementsByClassName("program")[0] != null)
    {
        document.getElementsByClassName("program")[0].addEventListener('click', function()
        {
            location.href = "programReport.html";
        })
    }

    if (document.getElementsByClassName("programToSubmit")[0] != null)
    {
        document.getElementsByClassName("programToSubmit")[0].addEventListener('click', function()
        {
            location.href = "programToSubmit.html";
        })
    }

    if (document.getElementsByClassName("bi-chat-square-text-fill")[0] != null)
    {
        document.getElementsByClassName("bi-chat-square-text-fill")[0].addEventListener('click', function()
        {
            if (document.getElementsByClassName("tooltiptext")[0].style.visibility != 'visible')
            {
                document.getElementsByClassName("tooltiptext")[0].style.visibility = 'visible';
            }
            else
            {
                document.getElementsByClassName("tooltiptext")[0].style.visibility = 'hidden';
            }
            
        });
    }

    if (document.getElementsByClassName("activity4")[0] != null)
    {
        document.getElementsByClassName("activity4")[0].addEventListener('click', function()
        {
            document.getElementsByClassName("notavailable")[0].style.visibility = 'visible';
        });
    }

    if (document.getElementsByClassName("tooltiptext")[0] != null)
    {
        document.getElementsByClassName("tooltiptext")[0].addEventListener('click', function()
        {
            location.href = "survey.html";
        })
    }

    if (document.getElementsByClassName("barcodepage")[0] != null)
    {
        document.getElementsByClassName("barcodepage")[0].addEventListener('click', function()
        {
            location.href = "websurvey.html";
        })
    }

    if (document.getElementsByClassName("bi-pc-display-horizontal")[0] != null)
    {
        document.getElementsByClassName("bi-pc-display-horizontal")[0].addEventListener('click', function()
        {
            location.href = "admin.html";
        })
    }
}

