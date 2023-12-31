import Modal from "@/components/modal";
import Stats from "@/components/stats";

export default function StatsModal({ params }: { params: { key: string } }) {
  return (
    <Modal bgColor="bg-gray-50">
      <div
        className="inline-block max-h-[calc(100vh-150px)] w-full max-w-screen-xl transform overflow-scroll bg-gray-50
        align-middle shadow-xl scrollbar-hide md:rounded-2xl md:border md:border-gray-200"
      >
        <Stats />
      </div>
    </Modal>
  );
}
