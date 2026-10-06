export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  award?: string;
  paperUrl?: string;
  projectSlug?: string;
  citation?: string;
};

export const publications: Publication[] = [
  {
    id: "pointconvit",
    title:
      "PointConViT: An Adaptable Convolution-Transformer Model for High-rate 3D Detection in Autonomous Robot",
    authors:
      "Ammar Yasir Naich, Nikesh Bajaj, Sofia Zahri, and Jesús Requena Carrión",
    venue:
      "Proceedings of the 7th International Conference on Deep Learning Theory and Applications (DeLTA), pp. 299–317, Porto",
    year: "2026",
    award: "Best Industrial Paper",
    paperUrl:
      "https://www.insticc.org/node/TechnicalProgram/DeLTA/2026/presentationDetails/149875",
    projectSlug: "pointconvit",
    citation: `@inproceedings{naich2026pointconvit,
  title={PointConViT: An Adaptable Convolution-Transformer Model for High-rate 3D Detection in Autonomous Robot},
  author={Naich, Ammar Yasir and Bajaj, Nikesh and Zahri, Sofia and Requena Carri{\'o}n, Jes{\'u}s},
  booktitle={Proceedings of the 7th International Conference on Deep Learning Theory and Applications (DeLTA)},
  pages={299--317},
  year={2026},
  address={Porto, Portugal}
}`,
  },
  {
    id: "lidar-sensors",
    title: "LiDAR-based intensity-aware outdoor 3D object detection",
    authors: "Ammar Yasir Naich and Jesús Requena Carrión",
    venue: "Sensors 24.9 (2024): 2942, MDPI",
    year: "2024",
    paperUrl: "https://doi.org/10.3390/s24092942",
    projectSlug: "ivef",
    citation: `@article{naich2024lidar,
  title={LiDAR-based intensity-aware outdoor 3D object detection},
  author={Naich, Ammar Yasir and Requena Carri{\'o}n, Jes{\'u}s},
  journal={Sensors},
  volume={24},
  number={9},
  pages={2942},
  year={2024},
  publisher={MDPI},
  doi={10.3390/s24092942}
}`,
  },
];
