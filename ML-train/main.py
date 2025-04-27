import soundfile as sf
import numpy as np

from pathlib import Path
from librosa import load
from asteroid import separate
from asteroid.models import ConvTasNet
from os import listdir
from tqdm import tqdm

TRAIN_PATH = Path("./data/train/train/")
DATA_PATH = Path("./data/")
NEW_TRAIN_PATH = Path("./data/train/")

MODEL = ConvTasNet.from_pretrained("mpariente/ConvTasNet_WHAM!_sepclean")


def clean_noise():

    for name in tqdm(listdir(TRAIN_PATH)):
        y, sr = load(TRAIN_PATH / name, mono=True)

        y = np.expand_dims(y, axis=0)

        sources = separate.separate(
            wav=y,
            model=MODEL
        )

        clean = sources[0, 1]

        sf.write(DATA_PATH / name, clean, sr)


clean_noise()