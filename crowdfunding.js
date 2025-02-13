// crowdfunding.js

// Define your contract information using your provided ABI, address, and (optionally) endpoint.
var Contracts = {
  CrowdfundingContract: {
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          }
        ],
        "name": "approveCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          }
        ],
        "name": "CampaignApproved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          }
        ],
        "name": "CampaignCancelled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "goal",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "CampaignCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newDeadline",
            "type": "uint256"
          }
        ],
        "name": "CampaignExtended",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "contributor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "CampaignFunded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "contributor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "CampaignRefunded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "reason",
            "type": "string"
          }
        ],
        "name": "CampaignRejected",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "campaignId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "CampaignWithdrawn",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_goal",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_durationInDays",
            "type": "uint256"
          }
        ],
        "name": "createCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          }
        ],
        "name": "deleteCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_extraDays",
            "type": "uint256"
          }
        ],
        "name": "extendDeadline",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          }
        ],
        "name": "fundCampaign",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          }
        ],
        "name": "refund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "reason",
            "type": "string"
          }
        ],
        "name": "rejectCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          }
        ],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          }
        ],
        "name": "getCampaign",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_campaignId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_contributor",
            "type": "address"
          }
        ],
        "name": "getContribution",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "nextCampaignId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    // Your deployed contract address
    address: "0xbbc5B57ca73919Ca41b5F97dc72857d9780575ef",
    // (Optional) If you use a provider endpoint, update it here.
    endpoint: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
  }
};

// CrowdfundingApp "class"
function CrowdfundingApp(Contract) {
  this.web3 = null;
  this.instance = null;
  this.Contract = Contract;
  this.account = null;
}

CrowdfundingApp.prototype.onReady = function (cb) {
  var that = this;
  this.init(function () {
    $("#message").text("DApp loaded successfully.");
    if (cb) cb();
    that.listenForEvents();
  });
};

CrowdfundingApp.prototype.init = function (cb) {
  if (window.ethereum) {
    this.web3 = new Web3(window.ethereum);
    ethereum
      .request({ method: "eth_chainId" })
      .then((chainId) => {
        if (chainId !== "0xaa36a7") {
          $("#message").text("Please switch to the Sepolia Testnet in MetaMask.");
          this.switchToSepolia();
          return;
        }
        return ethereum.request({ method: "eth_requestAccounts" });
      })
      .then((accounts) => {
        if (!accounts) return;
        this.account = accounts[0];
        this.instance = new this.web3.eth.Contract(this.Contract.abi, this.Contract.address);
        cb();
      })
      .catch(console.error);
  } else {
    console.error("Ethereum provider (MetaMask) is not available.");
  }
};

CrowdfundingApp.prototype.switchToSepolia = async function () {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }],
    });
    location.reload();
  } catch (error) {
    console.error("Failed to switch network:", error);
  }
};

CrowdfundingApp.prototype.bindButtons = function () {
  // For page-specific button bindings; each page can bind its own events.
};

CrowdfundingApp.prototype.listenForEvents = function () {
  var that = this;
  this.instance.events.CampaignCreated({})
    .on("data", function (event) {
      console.log("CampaignCreated event:", event);
    })
    .on("error", console.error);
  this.instance.events.CampaignFunded({})
    .on("data", function (event) {
      console.log("CampaignFunded event:", event);
    })
    .on("error", console.error);
  this.instance.events.CampaignWithdrawn({})
    .on("data", function (event) {
      console.log("CampaignWithdrawn event:", event);
    })
    .on("error", console.error);
  this.instance.events.CampaignRefunded({})
    .on("data", function (event) {
      console.log("CampaignRefunded event:", event);
    })
    .on("error", console.error);
};

CrowdfundingApp.prototype.createCampaign = function (name, description, goal, duration) {
  return this.instance.methods.createCampaign(name, description, goal, duration)
    .send({ from: this.account, gas: 1000000 });
};

CrowdfundingApp.prototype.approveCampaign = function (campaignId) {
  return this.instance.methods.approveCampaign(campaignId)
    .send({ from: this.account, gas: 1000000 });
};

CrowdfundingApp.prototype.rejectCampaign = function (campaignId, reason) {
  return this.instance.methods.rejectCampaign(campaignId, reason)
    .send({ from: this.account, gas: 1000000 });
};

CrowdfundingApp.prototype.fundCampaign = function (campaignId, amount) {
  return this.instance.methods.fundCampaign(campaignId)
    .send({ from: this.account, value: amount, gas: 1000000 });
};

CrowdfundingApp.prototype.withdrawFunds = function (campaignId) {
  return this.instance.methods.withdrawFunds(campaignId)
    .send({ from: this.account, gas: 1000000 });
};

CrowdfundingApp.prototype.refund = function (campaignId) {
  return this.instance.methods.refund(campaignId)
    .send({ from: this.account, gas: 1000000 });
};

CrowdfundingApp.prototype.extendDeadline = function (campaignId, extraDays) {
  return this.instance.methods.extendDeadline(campaignId, extraDays)
    .send({ from: this.account, gas: 1000000 });
};

CrowdfundingApp.prototype.deleteCampaign = function (campaignId) {
  return this.instance.methods.deleteCampaign(campaignId)
    .send({ from: this.account, gas: 1000000 });
};
