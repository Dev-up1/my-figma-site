import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "مرحباً بك في مركز الحياة الطبي! كيف يمكنني مساعدتك اليوم؟",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Auto-reply AI responses in Arabic
  const getAutoReply = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("موعد") || lowerMessage.includes("حجز") || lowerMessage.includes("احجز")) {
      return "يمكنك حجز موعد بسهولة من خلال الصفحة الرئيسية. اختر التخصص المناسب أو ابحث عن طبيب محدد، وسنساعدك في إتمام الحجز في دقائق معدودة.";
    }
    
    if (lowerMessage.includes("سعر") || lowerMessage.includes("تكلفة") || lowerMessage.includes("كم")) {
      return "أسعار الكشف تتراوح بين 180-450 ريال حسب التخصص والطبيب. يمكنك رؤية السعر الدقيق عند اختيار الطبيب من صفحة التخصصات.";
    }
    
    if (lowerMessage.includes("موقع") || lowerMessage.includes("عنوان") || lowerMessage.includes("فين")) {
      return "نحن موجودون في عدن - المنصورة - ريمي - بجانب مستشفى 22 مايو. يمكنك التواصل معنا على الرقم 773344556 للحصول على الاتجاهات أو أي استفسارات أخرى.";
    }
    
    if (lowerMessage.includes("تخصص") || lowerMessage.includes("أقسام") || lowerMessage.includes("طبيب")) {
      return "لدينا أكثر من 6 تخصصات طبية رئيسية: القلب والأوعية الدموية، الأعصاب والمخ، العظام، العيون، الباطنة، والأطفال. كل تخصص يضم نخبة من أفضل الأطباء المعتمدين.";
    }
    
    if (lowerMessage.includes("ساعات") || lowerMessage.includes("مواعيد العمل") || lowerMessage.includes("متى")) {
      return "نحن متاحون على مدار 24 ساعة طوال أيام الأسبوع. فريق خدمة العملاء جاهز دائماً لمساعدتك.";
    }
    
    if (lowerMessage.includes("تأمين") || lowerMessage.includes("تامين")) {
      return "نتعامل مع معظم شركات التأمين الطبي. يُرجى التواصل معنا على 777552666 لتأكيد قبول تأمينك.";
    }

    if (lowerMessage.includes("شكرا") || lowerMessage.includes("شكراً")) {
      return "العفو! سعدنا بخدمتك. لا تتردد في التواصل معنا في أي وقت.";
    }

    // Default response
    return "شكراً لتواصلك معنا. للحصول على مساعدة فورية، يمكنك الاتصال بنا على الرقم 773344556. أو يمكنك طرح سؤالك وسأحاول مساعدتك!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot typing delay and respond
    setTimeout(() => {
      const botReply: Message = {
        id: messages.length + 2,
        text: getAutoReply(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-96 h-[500px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-accent text-accent-foreground p-4 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">دردشة مباشرة</h3>
                <p className="text-sm opacity-90">الرد الفوري</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="text-accent-foreground hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-white text-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString("ar-YE", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="اكتب رسالتك..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-accent hover:bg-accent/90"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}