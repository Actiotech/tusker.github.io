// Illustrative enquiry story. See domains/README.md for the schema.
(window.TUSKER_DOMAINS = window.TUSKER_DOMAINS || {}).interiors = {
  "story": {
    "title": "From first enquiry to a ₹6.8 lakh project.",
    "note": "An interior studio, one customer, and a team that keeps the follow-up moving.",
    "customer": "Leena",
    "project": "2BHK interiors · Referral",
    "key": "ENQ-412",
    "value": "₹6,80,000",
    "owner": "Mathew",
    "stages": [
      "New enquiry",
      "Contacted",
      "Site measured",
      "Design shared",
      "Quote sent",
      "Won"
    ],
    "scenes": [
      {
        "nav": "New enquiry",
        "title": "A new enquiry needs a callback.",
        "body": "Leena calls about her 2BHK. Anita records her details in Tusker on WhatsApp.",
        "benefit": "Enquiry saved. The callback stays visible.",
        "viewer": "Anita’s WhatsApp",
        "role": "Office coordinator",
        "stage": 0,
        "next": "Call Leena back",
        "chat": [
          {
            "type": "day",
            "text": "Monday"
          },
          {
            "type": "me",
            "text": "Create an enquiry for Leena’s 2BHK interiors.",
            "time": "9:10 am",
            "voice": "0:06"
          },
          {
            "type": "bot",
            "text": "Customer Number?",
            "time": "9:10 am"
          },
          {
            "type": "me",
            "text": "90000 54321",
            "time": "9:11 am"
          },
          {
            "type": "bot",
            "text": "Create enquiry?\n• Summary: 2BHK interiors — Leena\n• Customer Number: +919000054321",
            "time": "9:11 am",
            "buttons": [
              "Create",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Create",
            "time": "9:11 am"
          },
          {
            "type": "bot",
            "text": "Task ENQ-412 created.",
            "time": "9:11 am"
          }
        ],
        "beats": [
          {
            "after": 6,
            "label": "Enquiry saved"
          }
        ]
      },
      {
        "nav": "Pending call",
        "title": "The owner spots a pending callback.",
        "body": "Mathew asks Tusker for new enquiries. Leena is still waiting, so he asks Vishnu to call.",
        "benefit": "A pending enquiry found in one question.",
        "viewer": "Mathew’s WhatsApp",
        "role": "Business owner",
        "stage": 0,
        "next": "Leena is still waiting for a call",
        "chat": [
          {
            "type": "day",
            "text": "Monday, 5 pm"
          },
          {
            "type": "me",
            "text": "Which enquiries are still new?",
            "time": "5:02 pm",
            "voice": "0:04"
          },
          {
            "type": "bot",
            "text": "These enquiries are still new:\n1. ENQ-412 — 2BHK interiors — Leena\n2. ENQ-409 — Villa kitchen — Shaji",
            "time": "5:02 pm"
          }
        ],
        "beats": [
          {
            "after": 2,
            "label": "Pending callback found"
          }
        ]
      },
      {
        "nav": "Site visit",
        "title": "The field team records the visit.",
        "body": "Vishnu confirms the call and site measurement from WhatsApp.",
        "benefit": "The office sees the field update.",
        "viewer": "Vishnu’s WhatsApp",
        "role": "Designer",
        "stage": 2,
        "next": "Prepare and share the design",
        "chat": [
          {
            "type": "day",
            "text": "Tuesday"
          },
          {
            "type": "me",
            "text": "I called Leena. Mark ENQ-412 contacted.",
            "time": "10:15 am"
          },
          {
            "type": "bot",
            "text": "Change ENQ-412 from new to contacted?",
            "time": "10:15 am",
            "buttons": [
              "Confirm",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Confirm",
            "time": "10:15 am"
          },
          {
            "type": "day",
            "text": "Wednesday"
          },
          {
            "type": "me",
            "text": "Leena’s site measurement is done. Mark ENQ-412 site measured.",
            "time": "12:02 pm",
            "voice": "0:07"
          },
          {
            "type": "bot",
            "text": "Change ENQ-412 from contacted to site measured?",
            "time": "12:02 pm",
            "buttons": [
              "Confirm",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Confirm",
            "time": "12:02 pm"
          }
        ],
        "beats": [
          {
            "after": 3,
            "stage": 1,
            "next": "Complete the site measurement",
            "label": "Call recorded"
          },
          {
            "after": 7,
            "label": "Site measurement recorded"
          }
        ]
      },
      {
        "nav": "Quote sent",
        "title": "A quote needs a follow-up.",
        "body": "Vishnu records the ₹6.8 lakh quote he sent Leena. Mathew gets the update.",
        "benefit": "The quote stays visible while Leena decides.",
        "viewer": "Vishnu’s WhatsApp",
        "role": "Designer",
        "stage": 4,
        "next": "Follow up on Leena’s quote",
        "notification": "Update on a task you watch:\nTask: ENQ-412 — 2BHK interiors — Leena\nUpdated by: Vishnu\nChange: Quote sent, ₹6,80,000.\n- Tusker",
        "chat": [
          {
            "type": "day",
            "text": "Thursday"
          },
          {
            "type": "me",
            "text": "Mark ENQ-412 design shared.",
            "time": "10:30 am"
          },
          {
            "type": "bot",
            "text": "Change ENQ-412 from site measured to design shared?",
            "time": "10:30 am",
            "buttons": [
              "Confirm",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Confirm",
            "time": "10:30 am"
          },
          {
            "type": "me",
            "text": "I sent Leena the quote for ₹6,80,000. Mark ENQ-412 quote sent.",
            "time": "4:15 pm",
            "voice": "0:08"
          },
          {
            "type": "bot",
            "text": "Change ENQ-412 from design shared to quote sent?\n• Quote Amount: ₹6,80,000",
            "time": "4:15 pm",
            "buttons": [
              "Confirm",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Confirm",
            "time": "4:16 pm"
          }
        ],
        "beats": [
          {
            "after": 3,
            "stage": 3,
            "next": "Prepare and send the quote",
            "label": "Design shared"
          },
          {
            "after": 6,
            "label": "Quote saved · Mathew notified"
          }
        ]
      },
      {
        "nav": "Deal won",
        "title": "The customer says yes.",
        "body": "After following up, Vishnu records Leena’s acceptance and confirms “Won”.",
        "benefit": "From a pending callback to a ₹6.8 lakh project.",
        "viewer": "Vishnu’s WhatsApp",
        "role": "Designer",
        "stage": 5,
        "next": "Deal won · Hand over to the project team",
        "notification": "Update on a task you watch:\nTask: ENQ-412 — 2BHK interiors — Leena\nUpdated by: Vishnu\nChange: Quote sent → Won.\n- Tusker",
        "chat": [
          {
            "type": "day",
            "text": "Friday"
          },
          {
            "type": "me",
            "text": "Leena has accepted the ₹6,80,000 quote. Mark ENQ-412 won.",
            "time": "11:20 am",
            "voice": "0:07"
          },
          {
            "type": "bot",
            "text": "Change ENQ-412 from quote sent to won?",
            "time": "11:20 am",
            "buttons": [
              "Confirm",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Confirm",
            "time": "11:20 am"
          },
          {
            "type": "bot",
            "text": "ENQ-412 moved to won.",
            "time": "11:20 am"
          }
        ],
        "beats": [
          {
            "after": 4,
            "label": "Deal won · Mathew notified"
          }
        ]
      }
    ]
  }
};
