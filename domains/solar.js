// Illustrative enquiry story. See domains/README.md for the schema.
(window.TUSKER_DOMAINS = window.TUSKER_DOMAINS || {}).solar = {
  "story": {
    "title": "From first enquiry to a ₹2.95 lakh solar order.",
    "note": "A rooftop solar business, one customer, and a clear next step after every conversation.",
    "customer": "Suresh",
    "project": "5 kW rooftop solar · Website",
    "key": "SOL-118",
    "value": "₹2,95,000",
    "owner": "Joseph",
    "stages": [
      "New enquiry",
      "Contacted",
      "Site visited",
      "Quote sent",
      "Won"
    ],
    "scenes": [
      {
        "nav": "New enquiry",
        "title": "A new enquiry needs a callback.",
        "body": "Divya records Suresh’s solar enquiry and electricity bill through WhatsApp.",
        "benefit": "The customer’s details stay with the enquiry.",
        "viewer": "Divya’s WhatsApp",
        "role": "Office coordinator",
        "stage": 0,
        "next": "Call Suresh back",
        "chat": [
          {
            "type": "day",
            "text": "Monday"
          },
          {
            "type": "me",
            "text": "Create an enquiry for Suresh’s 5 kW rooftop solar.",
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
            "text": "90000 67890",
            "time": "9:11 am"
          },
          {
            "type": "bot",
            "text": "Monthly electricity bill?",
            "time": "9:11 am"
          },
          {
            "type": "me",
            "text": "About ₹4,500",
            "time": "9:11 am"
          },
          {
            "type": "bot",
            "text": "Create enquiry?\n• Summary: 5 kW rooftop — Suresh\n• Customer Number: +919000067890\n• Monthly Bill: ₹4,500",
            "time": "9:12 am",
            "buttons": [
              "Create",
              "Cancel"
            ]
          },
          {
            "type": "me",
            "text": "Create",
            "time": "9:12 am"
          },
          {
            "type": "bot",
            "text": "Task SOL-118 created.",
            "time": "9:12 am"
          }
        ],
        "beats": [
          {
            "after": 8,
            "label": "Enquiry saved"
          }
        ]
      },
      {
        "nav": "Pending call",
        "title": "The owner spots a pending callback.",
        "body": "Joseph asks Tusker for new enquiries. Suresh is still waiting, so he asks Arjun to call.",
        "benefit": "A pending enquiry found in one question.",
        "viewer": "Joseph’s WhatsApp",
        "role": "Business owner",
        "stage": 0,
        "next": "Suresh is still waiting for a call",
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
            "text": "These enquiries are still new:\n1. SOL-118 — 5 kW rooftop — Suresh\n2. SOL-115 — 3 kW rooftop — Fathima",
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
        "body": "Arjun records the completed call and roof survey from WhatsApp.",
        "benefit": "The office sees the field update.",
        "viewer": "Arjun’s WhatsApp",
        "role": "Site engineer",
        "stage": 2,
        "next": "Prepare and send the solar quote",
        "chat": [
          {
            "type": "day",
            "text": "Tuesday"
          },
          {
            "type": "me",
            "text": "I called Suresh. Mark SOL-118 contacted.",
            "time": "10:15 am"
          },
          {
            "type": "bot",
            "text": "Change SOL-118 from new to contacted?",
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
            "text": "Suresh’s roof survey is done. Mark SOL-118 site visited.",
            "time": "12:02 pm",
            "voice": "0:07"
          },
          {
            "type": "bot",
            "text": "Change SOL-118 from contacted to site visited?",
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
            "next": "Complete the roof survey",
            "label": "Call recorded"
          },
          {
            "after": 7,
            "label": "Roof survey recorded"
          }
        ]
      },
      {
        "nav": "Quote sent",
        "title": "A quote needs a follow-up.",
        "body": "Arjun records the ₹2.95 lakh quote he sent Suresh. Joseph gets the update.",
        "benefit": "The quote stays visible while Suresh decides.",
        "viewer": "Arjun’s WhatsApp",
        "role": "Site engineer",
        "stage": 3,
        "next": "Follow up on Suresh’s quote",
        "notification": "Update on a task you watch:\nTask: SOL-118 — 5 kW rooftop — Suresh\nUpdated by: Arjun\nChange: Quote sent, ₹2,95,000.\n- Tusker",
        "chat": [
          {
            "type": "day",
            "text": "Thursday"
          },
          {
            "type": "me",
            "text": "I sent Suresh the quote for ₹2,95,000. Mark SOL-118 quote sent.",
            "time": "4:15 pm",
            "voice": "0:08"
          },
          {
            "type": "bot",
            "text": "Change SOL-118 from site visited to quote sent?\n• Quote Amount: ₹2,95,000",
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
            "label": "Quote saved · Joseph notified"
          }
        ]
      },
      {
        "nav": "Deal won",
        "title": "The customer says yes.",
        "body": "After following up, Arjun records Suresh’s acceptance and confirms “Won”.",
        "benefit": "From a pending callback to a ₹2.95 lakh order.",
        "viewer": "Arjun’s WhatsApp",
        "role": "Site engineer",
        "stage": 4,
        "next": "Deal won · Arrange the installation",
        "notification": "Update on a task you watch:\nTask: SOL-118 — 5 kW rooftop — Suresh\nUpdated by: Arjun\nChange: Quote sent → Won.\n- Tusker",
        "chat": [
          {
            "type": "day",
            "text": "Friday"
          },
          {
            "type": "me",
            "text": "Suresh accepted the ₹2,95,000 quote. Mark SOL-118 won.",
            "time": "11:20 am",
            "voice": "0:07"
          },
          {
            "type": "bot",
            "text": "Change SOL-118 from quote sent to won?",
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
            "text": "SOL-118 moved to won.",
            "time": "11:20 am"
          }
        ],
        "beats": [
          {
            "after": 4,
            "label": "Deal won · Joseph notified"
          }
        ]
      }
    ]
  }
};
