
export type FullMessageType = {
  sender: any, 
  seen: any[]
};

export type FullConversationType =  { 
  users: any[]; 
  messages: FullMessageType[]
};