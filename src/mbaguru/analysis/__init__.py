"""Model-agnostic analysis: sensitivity, goal seek, scenarios and Monte Carlo.

Each tool takes a ``Model`` (a function of named inputs returning one number)
and a base case, so it works with any calculator.
"""

from mbaguru.analysis.distributions import (
    Distribution,
    Fixed,
    Normal,
    Triangular,
    Uniform,
    parse_distribution,
)
from mbaguru.analysis.goal_seek import GoalSeek, goal_seek
from mbaguru.analysis.model import Inputs, Model
from mbaguru.analysis.models import MODELS, BuiltinModel, get_model
from mbaguru.analysis.montecarlo import HistogramBin, Simulation, histogram, simulate
from mbaguru.analysis.scenarios import ScenarioRow, ScenarioTable, compare_scenarios
from mbaguru.analysis.sensitivity import (
    OneWay,
    Tornado,
    TornadoBar,
    TwoWay,
    one_way,
    tornado,
    two_way,
)

__all__ = [
    "MODELS",
    "BuiltinModel",
    "Distribution",
    "Fixed",
    "GoalSeek",
    "HistogramBin",
    "Inputs",
    "Model",
    "Normal",
    "OneWay",
    "ScenarioRow",
    "ScenarioTable",
    "Simulation",
    "Tornado",
    "TornadoBar",
    "Triangular",
    "TwoWay",
    "Uniform",
    "compare_scenarios",
    "get_model",
    "goal_seek",
    "histogram",
    "one_way",
    "parse_distribution",
    "simulate",
    "tornado",
    "two_way",
]
